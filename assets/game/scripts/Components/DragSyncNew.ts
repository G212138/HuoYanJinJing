
/**
 * v1.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */

import { T2M } from "../../../frame/scripts/SDK/T2M";



const { ccclass, property } = cc._decorator;

@ccclass
export default class DragSyncNew extends cc.Component {
    @property()
    private isEdit = false;
    @property({ type: [cc.Component.EventHandler] })
    private touchStartEvents: cc.Component.EventHandler[] = [];
    @property({ type: [cc.Component.EventHandler] })
    private touchMovingEvents: cc.Component.EventHandler[] = [];
    @property({ type: [cc.Component.EventHandler] })
    private touchEndEvents: cc.Component.EventHandler[] = [];

    private tagId: string;
    private isEnable: boolean = true;
    private isTouch: boolean = false;
    //是否已经点击
    private isTouched: boolean = false;

    onLoad() {

        let index = this.node.getSiblingIndex();
        this.node.attr({
            id: index,
            initParent: this.node.parent,
            initPos: { x: this.node.x, y: this.node.y },
            initSiblingIndex: index,
        });
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    }

    public setEnable(isEnable: boolean) {
        this.isEnable = isEnable;
    }

    protected onEnable(): void {
        this.isTouched = false;
    }

    public addTouchEvent(target: cc.Node, component: string, handlers: string[]) {
        this.touchStartEvents.push(new DragSyncNew.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];

        this.touchMovingEvents.push(new DragSyncNew.EventHandler());
        this.touchMovingEvents[0].target = target;
        this.touchMovingEvents[0].component = component;
        this.touchMovingEvents[0].handler = handlers[1];

        this.touchEndEvents.push(new DragSyncNew.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[2];
    }

    private touchStart(event: cc.Event.EventTouch) {
        if (!this.isEnable) return;
        this.isTouched = true;
        this.isTouch = true;
        let pos = event.getLocation()
        let type = 'touchStart' + this.tagId;
        let data = { pos: { x: pos.x, y: pos.y }, isDrag: false };
        if (this.isEdit) {
            this.touchStartHandler(data)
        } else {
            T2M.dispatch(type, data);
        }

    }

    private touchMove(event: cc.Event.EventTouch) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable) return;
        let pos = event.getLocation();
        let type = 'touchMove' + this.tagId;
        let data = { pos: { x: pos.x, y: pos.y } };

        if (this.isEdit) {
            this.touchMoveHandler(data)
        } else {
            T2M.dispatch(type, data, true);
        }
    }

    private touchEnd(event: cc.Event.EventTouch) {
        if (!this.isTouched) {
            return;
        }
        if (!this.isEnable) return;
        this.isTouch = false;
        let pos = event.getLocation()
        let type = 'touchEnd' + this.tagId;

        let stertPos = event.getStartLocation()
        let endPos = event.getLocation()
        let data = {
            pos: { x: pos.x, y: pos.y },
            spos: { x: stertPos.x, y: stertPos.y },
            epos: { x: endPos.x, y: endPos.y }
        };

        if (this.isEdit) {
            this.touchEndHandler(data);
        } else {
            T2M.dispatch(type, data);
        }

    }

    private addEventByT2M() {
        T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M.addSyncEventListener('touchMove' + this.tagId, this.touchMoveHandler.bind(this));
        T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    }

    //根据触摸时间判断是否为点击事件
    private isClickEvent: boolean = false;
    private touchStartData: any = null;

    //触摸开始位置
    private touchStartPos: cc.Vec2 = null;

    private touchStartHandler(data) {
        if (!this.isEnable) return;
        this.touchStartPos = cc.v2(data.pos.x, data.pos.y);
        this.isTouched = true;
        this.isClickEvent = true;
        this.touchStartData = data;
        // this.handleTouchStart(this.touchStartData);
    }

    private handleTouchStart(data) {
        // this.node.parent = this.rootNode;
        // this.node.position = cc.v3(this.touchStartData.pos.x, this.touchStartData.pos.y);
        for (let eventHandler of this.touchStartEvents) {
            eventHandler.emit([{ pos: this.touchStartData.pos, target: this.node, isDrag: this.touchStartData.isDrag }]);
        }
    }

    private touchMoveHandler(data) {
        if (!this.isTouched) return;
        //判断当前位置与触摸开始位置的距离，如果超过一定距离，则不再判断为点击事件
        if (this.isClickEvent && this.touchStartPos) {
            let distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance > 10) {
                this.isClickEvent = false;
                this.touchStartData.isDrag = true;
                this.handleTouchStart(this.touchStartData);
                this.touchStartData = null;
            }
        } else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
            for (let eventHandler of this.touchMovingEvents) {
                eventHandler.emit([{ pos: data.pos, target: this.node }]);
            }
        }
    }

    private touchEndHandler(data) {
        if (!this.isTouched) {
            return;
        }
        this.isTouched = false;
        if (this.isClickEvent && this.touchStartPos) {
            let distance = this.touchStartPos.sub(cc.v2(data.pos.x, data.pos.y)).mag();
            if (distance <= 10) {
                this.isClickEvent = true;
            }
        }
        else {
            // this.node.position = cc.v3(data.pos.x, data.pos.y);
        }

        for (let eventHandler of this.touchEndEvents) {
            eventHandler.emit([{ pos: data.pos, spos: data.spos, epos: data.epos, target: this.node, isClick: this.isClickEvent }]);
        }
    }
}

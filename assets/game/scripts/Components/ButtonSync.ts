/**
 * v2.0
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 */

import { T2M } from '../../../frame/scripts/SDK/T2M';
import { GameManager } from '../Manager/GameManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonSync extends cc.Component {

    @property({ type: cc.SpriteFrame })
    private normalSprite: cc.SpriteFrame = null;

    @property({ type: cc.SpriteFrame })
    private seclectSprite: cc.SpriteFrame = null;

    @property({ type: cc.Sprite })
    private target: cc.Sprite = null;

    @property({ type: [cc.Component.EventHandler] })
    private touchStartEvents: cc.Component.EventHandler[] = [];
    @property({ type: [cc.Component.EventHandler] })
    private touchEndEvents: cc.Component.EventHandler[] = [];
    @property
    private isScale: number = 1;

    private tagId: string;
    private isEnable: boolean = true;

    //是否已经点击
    private isTouched: boolean = false;

    public set seclect(boolean: boolean) {
        this.node.getComponent(cc.Sprite).spriteFrame = boolean ? this.seclectSprite : this.normalSprite;
    }

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
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

    public addTouchEvent(target: cc.Node, component: string, handlers: string[], isScale: number = 1) {
        this.touchStartEvents.push(new ButtonSync.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];

        this.touchEndEvents.push(new ButtonSync.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];

        this.isScale = isScale;
    }

    private touchStart(event: cc.Event.EventTouch) {
        if (!this.isEnable) return;
        if (this.isTouched) {
            return;
        }
        this.isTouched = true;
        let type = 'touchStart' + this.tagId;
        let pos = event.getLocation();
        let data = { pos: { x: pos.x, y: pos.y } };
        T2M.dispatch(type, data);
    }

    private touchEnd(event: cc.Event.EventTouch) {
        if (!this.isEnable) return;
        let type = 'touchEnd' + this.tagId;
        let pos = event.getLocation();
        let data = { pos: { x: pos.x, y: pos.y } };
        T2M.dispatch(type, data);
    }

    private addEventByT2M() {
        T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    }

    private touchStartHandler(data) {

        if (!this.target) {
            this.node.scale = this.isScale;
        } else {
            this.target.spriteFrame = this.seclectSprite;
        }

        this.isTouched = true;
        for (let eventHandler of this.touchStartEvents) {
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    }

    private touchEndHandler(data) {
        if (!this.isTouched) {
            return;
        }
        if (!this.target) {
            this.node.scale = 1;
        } else {
            this.target.spriteFrame = this.normalSprite;
        }
        this.isTouched = false;
        for (let eventHandler of this.touchEndEvents) {
            eventHandler.emit([{ target: this.node, pos: data.pos }]);
        }
    }
}

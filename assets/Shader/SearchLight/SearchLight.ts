
const { ccclass, property } = cc._decorator;

@ccclass
export default class SearchLight extends cc.Component {

    _material: any;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event: cc.Event.EventTouch) => {
            const pos = event.getLocation();
            this._material.effect.setProperty('mouse', pos);
        });
        this.node.on(cc.Node.EventType.TOUCH_START, (event: cc.Event.EventTouch) => {
            const pos = event.getLocation();
            this._material.effect.setProperty('mouse', pos);
        });
        this.node.on(cc.Node.EventType.TOUCH_END, (event: cc.Event.EventTouch) => {
            const pos = event.getLocation();
            this._material.effect.setProperty('mouse', pos);
        });
    }
    start() {
        this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];
    }

}

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import CustomToggle from './CustomToggle';

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    effectContainer: cc.Node = null;

    @property(cc.Prefab)
    togglePrefab: cc.Prefab = null;

    @property(cc.Layout)
    toggleLayout: cc.Layout = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        const effectChildren = this.effectContainer.children;

        const toggleContainer = this.getComponent(cc.ToggleContainer);

        effectChildren.forEach(child => {
            const name = child.name;

            const toggle = cc.instantiate(this.togglePrefab);
            this.toggleLayout.node.addChild(toggle);

            const customToggleTS = toggle.getComponent(CustomToggle);
            customToggleTS.setToggleName(name);

            const toggleTs = toggle.getComponent(cc.Toggle);

            toggleTs.toggleGroup = toggleContainer;

            toggle.on('toggle', () => {
                effectChildren.forEach(c => {
                    c.active = false;
                });
                
                const node = this.effectContainer.getChildByName(name);
                if (node) {
                    node.active = true;
                }
            }, this);
        });
    }

    // update (dt) {}
}

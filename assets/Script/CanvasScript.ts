
const { ccclass, property } = cc._decorator;

@ccclass
export default class CanvasScript extends cc.Component {


    onLoad() {
        // 关掉引擎的动态图集 （慎用，这会导致游戏的其他drawcall 增高）
        cc.dynamicAtlasManager.enabled = false;
    }

}

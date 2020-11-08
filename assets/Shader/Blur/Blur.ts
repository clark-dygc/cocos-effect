
const { ccclass, property } = cc._decorator;

@ccclass
export default class GaussBlur extends cc.Component {

    /** 材质 */
    _material: cc.Material = null;
    @property({
        type: cc.Material, displayName: '设置模糊材质', tooltip: '设置模糊材质',
    })
    get material() { return this._material; }
    set material(material: cc.Material) {
        this._material = material;
        this._applyShader();
    }

    /** shader num参数的大小范围 */
    private _material_num: number = 0.03;
    /** 编译器中设置shader 材质 num参数的范围 */
    @property({
        type: cc.Float, displayName: '设置模糊程度', tooltip: '设置模糊程度(范围 0~0.1)',
    })
    get material_num() { return this._material_num; }
    set material_num(num) {
        this._material_num = num;
        this._applyShaderParam();
    }

    /** 设置shader(编辑器中使用) */
    private _applyShader() {
        this.node.getComponent(cc.Sprite).setMaterial(0, this._material);
    }
    /** 设置shader 参数(编辑器中使用) */
    private _applyShaderParam() {
        const sp = this.node.getComponent(cc.Sprite);
        if (!this._material) {
            this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];
        }
        this._material['_props']['num'] = this._material_num;
        sp.setMaterial(0, this._material);
        cc.log(this._material_num);
    }
}

gdjs.FASE_324Code = {};
gdjs.FASE_324Code.GDcontadorObjects1= [];
gdjs.FASE_324Code.GDcontadorObjects2= [];
gdjs.FASE_324Code.GDCORRETAObjects1= [];
gdjs.FASE_324Code.GDCORRETAObjects2= [];
gdjs.FASE_324Code.GDERRADAObjects1= [];
gdjs.FASE_324Code.GDERRADAObjects2= [];
gdjs.FASE_324Code.GDNewSpriteObjects1= [];
gdjs.FASE_324Code.GDNewSpriteObjects2= [];
gdjs.FASE_324Code.GDbotao1Objects1= [];
gdjs.FASE_324Code.GDbotao1Objects2= [];
gdjs.FASE_324Code.GDPULSATINGSTARSObjects1= [];
gdjs.FASE_324Code.GDPULSATINGSTARSObjects2= [];
gdjs.FASE_324Code.GDbotao12Objects1= [];
gdjs.FASE_324Code.GDbotao12Objects2= [];
gdjs.FASE_324Code.GDROTATINGVARIABLESObjects1= [];
gdjs.FASE_324Code.GDROTATINGVARIABLESObjects2= [];
gdjs.FASE_324Code.GDbotao123Objects1= [];
gdjs.FASE_324Code.GDbotao123Objects2= [];
gdjs.FASE_324Code.GDECLIPSINGBINARIESObjects1= [];
gdjs.FASE_324Code.GDECLIPSINGBINARIESObjects2= [];
gdjs.FASE_324Code.GDbotao122Objects1= [];
gdjs.FASE_324Code.GDbotao122Objects2= [];
gdjs.FASE_324Code.GDCATACLYSMICVARIABLESObjects1= [];
gdjs.FASE_324Code.GDCATACLYSMICVARIABLESObjects2= [];

gdjs.FASE_324Code.conditionTrue_0 = {val:false};
gdjs.FASE_324Code.condition0IsTrue_0 = {val:false};
gdjs.FASE_324Code.condition1IsTrue_0 = {val:false};
gdjs.FASE_324Code.condition2IsTrue_0 = {val:false};
gdjs.FASE_324Code.condition3IsTrue_0 = {val:false};
gdjs.FASE_324Code.conditionTrue_1 = {val:false};
gdjs.FASE_324Code.condition0IsTrue_1 = {val:false};
gdjs.FASE_324Code.condition1IsTrue_1 = {val:false};
gdjs.FASE_324Code.condition2IsTrue_1 = {val:false};
gdjs.FASE_324Code.condition3IsTrue_1 = {val:false};


gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_324Code.GDbotao1Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_324Code.GDbotao1Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_324Code.GDbotao12Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_324Code.GDbotao12Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_324Code.GDbotao123Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_324Code.GDbotao123Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_324Code.GDbotao122Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_324Code.GDbotao122Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_324Code.GDbotao122Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_324Code.GDbotao123Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_324Code.GDbotao1Objects1});
gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_324Code.GDbotao12Objects1});
gdjs.FASE_324Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_324Code.GDbotao1Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao1Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_324Code.GDbotao1Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_324Code.GDbotao12Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao12Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_324Code.GDbotao12Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao12Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_324Code.GDbotao123Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao123Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_324Code.GDbotao123Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao123Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_324Code.GDbotao122Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao122Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_324Code.GDbotao122Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_324Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_324Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_324Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDbotao122Objects1[i].setAnimation(0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.FASE_324Code.GDcontadorObjects1);
{for(var i = 0, len = gdjs.FASE_324Code.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.FASE_324Code.GDcontadorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_324Code.GDbotao122Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
gdjs.FASE_324Code.condition1IsTrue_0.val = false;
gdjs.FASE_324Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_324Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_324Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_324Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_324Code.conditionTrue_1 = gdjs.FASE_324Code.condition2IsTrue_0;
gdjs.FASE_324Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11532092);
}
}}
}
if (gdjs.FASE_324Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 4.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_324Code.GDbotao123Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
gdjs.FASE_324Code.condition1IsTrue_0.val = false;
gdjs.FASE_324Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_324Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_324Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_324Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_324Code.conditionTrue_1 = gdjs.FASE_324Code.condition2IsTrue_0;
gdjs.FASE_324Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11530580);
}
}}
}
if (gdjs.FASE_324Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 4.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_324Code.GDbotao1Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
gdjs.FASE_324Code.condition1IsTrue_0.val = false;
gdjs.FASE_324Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_324Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_324Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_324Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_324Code.conditionTrue_1 = gdjs.FASE_324Code.condition2IsTrue_0;
gdjs.FASE_324Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11529660);
}
}}
}
if (gdjs.FASE_324Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 4.2", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_324Code.GDbotao12Objects1);

gdjs.FASE_324Code.condition0IsTrue_0.val = false;
gdjs.FASE_324Code.condition1IsTrue_0.val = false;
gdjs.FASE_324Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_324Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_324Code.mapOfGDgdjs_46FASE_95324Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_324Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_324Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_324Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_324Code.conditionTrue_1 = gdjs.FASE_324Code.condition2IsTrue_0;
gdjs.FASE_324Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11524316);
}
}}
}
if (gdjs.FASE_324Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 4.2", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{


{
}

}


{


{
}

}


};

gdjs.FASE_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE_324Code.GDcontadorObjects1.length = 0;
gdjs.FASE_324Code.GDcontadorObjects2.length = 0;
gdjs.FASE_324Code.GDCORRETAObjects1.length = 0;
gdjs.FASE_324Code.GDCORRETAObjects2.length = 0;
gdjs.FASE_324Code.GDERRADAObjects1.length = 0;
gdjs.FASE_324Code.GDERRADAObjects2.length = 0;
gdjs.FASE_324Code.GDNewSpriteObjects1.length = 0;
gdjs.FASE_324Code.GDNewSpriteObjects2.length = 0;
gdjs.FASE_324Code.GDbotao1Objects1.length = 0;
gdjs.FASE_324Code.GDbotao1Objects2.length = 0;
gdjs.FASE_324Code.GDPULSATINGSTARSObjects1.length = 0;
gdjs.FASE_324Code.GDPULSATINGSTARSObjects2.length = 0;
gdjs.FASE_324Code.GDbotao12Objects1.length = 0;
gdjs.FASE_324Code.GDbotao12Objects2.length = 0;
gdjs.FASE_324Code.GDROTATINGVARIABLESObjects1.length = 0;
gdjs.FASE_324Code.GDROTATINGVARIABLESObjects2.length = 0;
gdjs.FASE_324Code.GDbotao123Objects1.length = 0;
gdjs.FASE_324Code.GDbotao123Objects2.length = 0;
gdjs.FASE_324Code.GDECLIPSINGBINARIESObjects1.length = 0;
gdjs.FASE_324Code.GDECLIPSINGBINARIESObjects2.length = 0;
gdjs.FASE_324Code.GDbotao122Objects1.length = 0;
gdjs.FASE_324Code.GDbotao122Objects2.length = 0;
gdjs.FASE_324Code.GDCATACLYSMICVARIABLESObjects1.length = 0;
gdjs.FASE_324Code.GDCATACLYSMICVARIABLESObjects2.length = 0;

gdjs.FASE_324Code.eventsList0(runtimeScene);
return;

}

gdjs['FASE_324Code'] = gdjs.FASE_324Code;

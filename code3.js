gdjs.FASE_322Code = {};
gdjs.FASE_322Code.GDcontadorObjects1= [];
gdjs.FASE_322Code.GDcontadorObjects2= [];
gdjs.FASE_322Code.GDCORRETAObjects1= [];
gdjs.FASE_322Code.GDCORRETAObjects2= [];
gdjs.FASE_322Code.GDERRADAObjects1= [];
gdjs.FASE_322Code.GDERRADAObjects2= [];
gdjs.FASE_322Code.GDNewSpriteObjects1= [];
gdjs.FASE_322Code.GDNewSpriteObjects2= [];
gdjs.FASE_322Code.GDbotao1Objects1= [];
gdjs.FASE_322Code.GDbotao1Objects2= [];
gdjs.FASE_322Code.GDPULSATINGSTARSObjects1= [];
gdjs.FASE_322Code.GDPULSATINGSTARSObjects2= [];
gdjs.FASE_322Code.GDbotao12Objects1= [];
gdjs.FASE_322Code.GDbotao12Objects2= [];
gdjs.FASE_322Code.GDROTATINGVARIABLESObjects1= [];
gdjs.FASE_322Code.GDROTATINGVARIABLESObjects2= [];
gdjs.FASE_322Code.GDbotao123Objects1= [];
gdjs.FASE_322Code.GDbotao123Objects2= [];
gdjs.FASE_322Code.GDECLIPSINGBINARIESObjects1= [];
gdjs.FASE_322Code.GDECLIPSINGBINARIESObjects2= [];
gdjs.FASE_322Code.GDbotao122Objects1= [];
gdjs.FASE_322Code.GDbotao122Objects2= [];
gdjs.FASE_322Code.GDCATACLYSMICVARIABLESObjects1= [];
gdjs.FASE_322Code.GDCATACLYSMICVARIABLESObjects2= [];

gdjs.FASE_322Code.conditionTrue_0 = {val:false};
gdjs.FASE_322Code.condition0IsTrue_0 = {val:false};
gdjs.FASE_322Code.condition1IsTrue_0 = {val:false};
gdjs.FASE_322Code.condition2IsTrue_0 = {val:false};
gdjs.FASE_322Code.condition3IsTrue_0 = {val:false};
gdjs.FASE_322Code.conditionTrue_1 = {val:false};
gdjs.FASE_322Code.condition0IsTrue_1 = {val:false};
gdjs.FASE_322Code.condition1IsTrue_1 = {val:false};
gdjs.FASE_322Code.condition2IsTrue_1 = {val:false};
gdjs.FASE_322Code.condition3IsTrue_1 = {val:false};


gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_322Code.GDbotao1Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_322Code.GDbotao1Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_322Code.GDbotao12Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_322Code.GDbotao12Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_322Code.GDbotao123Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_322Code.GDbotao123Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_322Code.GDbotao122Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_322Code.GDbotao122Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_322Code.GDbotao122Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_322Code.GDbotao12Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_322Code.GDbotao123Objects1});
gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_322Code.GDbotao1Objects1});
gdjs.FASE_322Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_322Code.GDbotao1Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao1Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_322Code.GDbotao1Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_322Code.GDbotao12Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao12Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_322Code.GDbotao12Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao12Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_322Code.GDbotao123Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao123Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_322Code.GDbotao123Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao123Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_322Code.GDbotao122Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao122Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_322Code.GDbotao122Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_322Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDbotao122Objects1[i].setAnimation(0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.FASE_322Code.GDcontadorObjects1);
{for(var i = 0, len = gdjs.FASE_322Code.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.FASE_322Code.GDcontadorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_322Code.GDbotao122Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
gdjs.FASE_322Code.condition1IsTrue_0.val = false;
gdjs.FASE_322Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_322Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_322Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_322Code.conditionTrue_1 = gdjs.FASE_322Code.condition2IsTrue_0;
gdjs.FASE_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11409100);
}
}}
}
if (gdjs.FASE_322Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 2.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_322Code.GDbotao12Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
gdjs.FASE_322Code.condition1IsTrue_0.val = false;
gdjs.FASE_322Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_322Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_322Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_322Code.conditionTrue_1 = gdjs.FASE_322Code.condition2IsTrue_0;
gdjs.FASE_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11465780);
}
}}
}
if (gdjs.FASE_322Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 2.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_322Code.GDbotao123Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
gdjs.FASE_322Code.condition1IsTrue_0.val = false;
gdjs.FASE_322Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_322Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_322Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_322Code.conditionTrue_1 = gdjs.FASE_322Code.condition2IsTrue_0;
gdjs.FASE_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11466380);
}
}}
}
if (gdjs.FASE_322Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 2.2", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_322Code.GDbotao1Objects1);

gdjs.FASE_322Code.condition0IsTrue_0.val = false;
gdjs.FASE_322Code.condition1IsTrue_0.val = false;
gdjs.FASE_322Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_322Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322Code.mapOfGDgdjs_46FASE_95322Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_322Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_322Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_322Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_322Code.conditionTrue_1 = gdjs.FASE_322Code.condition2IsTrue_0;
gdjs.FASE_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11467140);
}
}}
}
if (gdjs.FASE_322Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 2.2", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


};

gdjs.FASE_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE_322Code.GDcontadorObjects1.length = 0;
gdjs.FASE_322Code.GDcontadorObjects2.length = 0;
gdjs.FASE_322Code.GDCORRETAObjects1.length = 0;
gdjs.FASE_322Code.GDCORRETAObjects2.length = 0;
gdjs.FASE_322Code.GDERRADAObjects1.length = 0;
gdjs.FASE_322Code.GDERRADAObjects2.length = 0;
gdjs.FASE_322Code.GDNewSpriteObjects1.length = 0;
gdjs.FASE_322Code.GDNewSpriteObjects2.length = 0;
gdjs.FASE_322Code.GDbotao1Objects1.length = 0;
gdjs.FASE_322Code.GDbotao1Objects2.length = 0;
gdjs.FASE_322Code.GDPULSATINGSTARSObjects1.length = 0;
gdjs.FASE_322Code.GDPULSATINGSTARSObjects2.length = 0;
gdjs.FASE_322Code.GDbotao12Objects1.length = 0;
gdjs.FASE_322Code.GDbotao12Objects2.length = 0;
gdjs.FASE_322Code.GDROTATINGVARIABLESObjects1.length = 0;
gdjs.FASE_322Code.GDROTATINGVARIABLESObjects2.length = 0;
gdjs.FASE_322Code.GDbotao123Objects1.length = 0;
gdjs.FASE_322Code.GDbotao123Objects2.length = 0;
gdjs.FASE_322Code.GDECLIPSINGBINARIESObjects1.length = 0;
gdjs.FASE_322Code.GDECLIPSINGBINARIESObjects2.length = 0;
gdjs.FASE_322Code.GDbotao122Objects1.length = 0;
gdjs.FASE_322Code.GDbotao122Objects2.length = 0;
gdjs.FASE_322Code.GDCATACLYSMICVARIABLESObjects1.length = 0;
gdjs.FASE_322Code.GDCATACLYSMICVARIABLESObjects2.length = 0;

gdjs.FASE_322Code.eventsList0(runtimeScene);
return;

}

gdjs['FASE_322Code'] = gdjs.FASE_322Code;

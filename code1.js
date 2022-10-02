gdjs.FASE_321Code = {};
gdjs.FASE_321Code.GDcontadorObjects1= [];
gdjs.FASE_321Code.GDcontadorObjects2= [];
gdjs.FASE_321Code.GDCORRETAObjects1= [];
gdjs.FASE_321Code.GDCORRETAObjects2= [];
gdjs.FASE_321Code.GDERRADAObjects1= [];
gdjs.FASE_321Code.GDERRADAObjects2= [];
gdjs.FASE_321Code.GDNewSpriteObjects1= [];
gdjs.FASE_321Code.GDNewSpriteObjects2= [];
gdjs.FASE_321Code.GDbotao1Objects1= [];
gdjs.FASE_321Code.GDbotao1Objects2= [];
gdjs.FASE_321Code.GDPULSATINGSTARSObjects1= [];
gdjs.FASE_321Code.GDPULSATINGSTARSObjects2= [];
gdjs.FASE_321Code.GDbotao12Objects1= [];
gdjs.FASE_321Code.GDbotao12Objects2= [];
gdjs.FASE_321Code.GDROTATINGVARIABLESObjects1= [];
gdjs.FASE_321Code.GDROTATINGVARIABLESObjects2= [];
gdjs.FASE_321Code.GDbotao123Objects1= [];
gdjs.FASE_321Code.GDbotao123Objects2= [];
gdjs.FASE_321Code.GDECLIPSINGBINARIESObjects1= [];
gdjs.FASE_321Code.GDECLIPSINGBINARIESObjects2= [];
gdjs.FASE_321Code.GDbotao122Objects1= [];
gdjs.FASE_321Code.GDbotao122Objects2= [];
gdjs.FASE_321Code.GDCATACLYSMICVARIABLESObjects1= [];
gdjs.FASE_321Code.GDCATACLYSMICVARIABLESObjects2= [];
gdjs.FASE_321Code.GDERRADAObjects1= [];
gdjs.FASE_321Code.GDERRADAObjects2= [];
gdjs.FASE_321Code.GDCORRETAObjects1= [];
gdjs.FASE_321Code.GDCORRETAObjects2= [];
gdjs.FASE_321Code.GDDoubleChevronArrowObjects1= [];
gdjs.FASE_321Code.GDDoubleChevronArrowObjects2= [];
gdjs.FASE_321Code.GDNEXTObjects1= [];
gdjs.FASE_321Code.GDNEXTObjects2= [];
gdjs.FASE_321Code.GDBlankButtonObjects1= [];
gdjs.FASE_321Code.GDBlankButtonObjects2= [];
gdjs.FASE_321Code.GDshowObjects1= [];
gdjs.FASE_321Code.GDshowObjects2= [];

gdjs.FASE_321Code.conditionTrue_0 = {val:false};
gdjs.FASE_321Code.condition0IsTrue_0 = {val:false};
gdjs.FASE_321Code.condition1IsTrue_0 = {val:false};
gdjs.FASE_321Code.condition2IsTrue_0 = {val:false};
gdjs.FASE_321Code.condition3IsTrue_0 = {val:false};
gdjs.FASE_321Code.conditionTrue_1 = {val:false};
gdjs.FASE_321Code.condition0IsTrue_1 = {val:false};
gdjs.FASE_321Code.condition1IsTrue_1 = {val:false};
gdjs.FASE_321Code.condition2IsTrue_1 = {val:false};
gdjs.FASE_321Code.condition3IsTrue_1 = {val:false};


gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_321Code.GDbotao1Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_321Code.GDbotao1Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_321Code.GDbotao12Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_321Code.GDbotao12Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_321Code.GDbotao123Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_321Code.GDbotao123Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_321Code.GDbotao122Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_321Code.GDbotao122Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_321Code.GDbotao1Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_321Code.GDbotao12Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_321Code.GDbotao122Objects1});
gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_321Code.GDbotao123Objects1});
gdjs.FASE_321Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_321Code.GDbotao1Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao1Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_321Code.GDbotao1Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_321Code.GDbotao12Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao12Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_321Code.GDbotao12Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao12Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_321Code.GDbotao123Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao123Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_321Code.GDbotao123Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao123Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_321Code.GDbotao122Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao122Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_321Code.GDbotao122Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_321Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_321Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDbotao122Objects1[i].setAnimation(0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.FASE_321Code.GDcontadorObjects1);
{for(var i = 0, len = gdjs.FASE_321Code.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.FASE_321Code.GDcontadorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_321Code.GDbotao1Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
gdjs.FASE_321Code.condition1IsTrue_0.val = false;
gdjs.FASE_321Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_321Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_321Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_321Code.conditionTrue_1 = gdjs.FASE_321Code.condition2IsTrue_0;
gdjs.FASE_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15523332);
}
}}
}
if (gdjs.FASE_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 1.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_321Code.GDbotao12Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
gdjs.FASE_321Code.condition1IsTrue_0.val = false;
gdjs.FASE_321Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_321Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_321Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_321Code.conditionTrue_1 = gdjs.FASE_321Code.condition2IsTrue_0;
gdjs.FASE_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20076324);
}
}}
}
if (gdjs.FASE_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 1.2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_321Code.GDbotao122Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
gdjs.FASE_321Code.condition1IsTrue_0.val = false;
gdjs.FASE_321Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_321Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_321Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_321Code.conditionTrue_1 = gdjs.FASE_321Code.condition2IsTrue_0;
gdjs.FASE_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20102252);
}
}}
}
if (gdjs.FASE_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 1.2", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_321Code.GDbotao123Objects1);

gdjs.FASE_321Code.condition0IsTrue_0.val = false;
gdjs.FASE_321Code.condition1IsTrue_0.val = false;
gdjs.FASE_321Code.condition2IsTrue_0.val = false;
{
gdjs.FASE_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_321Code.mapOfGDgdjs_46FASE_95321Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if ( gdjs.FASE_321Code.condition0IsTrue_0.val ) {
{
gdjs.FASE_321Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FASE_321Code.condition1IsTrue_0.val ) {
{
{gdjs.FASE_321Code.conditionTrue_1 = gdjs.FASE_321Code.condition2IsTrue_0;
gdjs.FASE_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19118980);
}
}}
}
if (gdjs.FASE_321Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 1.2", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{



}


};

gdjs.FASE_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE_321Code.GDcontadorObjects1.length = 0;
gdjs.FASE_321Code.GDcontadorObjects2.length = 0;
gdjs.FASE_321Code.GDCORRETAObjects1.length = 0;
gdjs.FASE_321Code.GDCORRETAObjects2.length = 0;
gdjs.FASE_321Code.GDERRADAObjects1.length = 0;
gdjs.FASE_321Code.GDERRADAObjects2.length = 0;
gdjs.FASE_321Code.GDNewSpriteObjects1.length = 0;
gdjs.FASE_321Code.GDNewSpriteObjects2.length = 0;
gdjs.FASE_321Code.GDbotao1Objects1.length = 0;
gdjs.FASE_321Code.GDbotao1Objects2.length = 0;
gdjs.FASE_321Code.GDPULSATINGSTARSObjects1.length = 0;
gdjs.FASE_321Code.GDPULSATINGSTARSObjects2.length = 0;
gdjs.FASE_321Code.GDbotao12Objects1.length = 0;
gdjs.FASE_321Code.GDbotao12Objects2.length = 0;
gdjs.FASE_321Code.GDROTATINGVARIABLESObjects1.length = 0;
gdjs.FASE_321Code.GDROTATINGVARIABLESObjects2.length = 0;
gdjs.FASE_321Code.GDbotao123Objects1.length = 0;
gdjs.FASE_321Code.GDbotao123Objects2.length = 0;
gdjs.FASE_321Code.GDECLIPSINGBINARIESObjects1.length = 0;
gdjs.FASE_321Code.GDECLIPSINGBINARIESObjects2.length = 0;
gdjs.FASE_321Code.GDbotao122Objects1.length = 0;
gdjs.FASE_321Code.GDbotao122Objects2.length = 0;
gdjs.FASE_321Code.GDCATACLYSMICVARIABLESObjects1.length = 0;
gdjs.FASE_321Code.GDCATACLYSMICVARIABLESObjects2.length = 0;
gdjs.FASE_321Code.GDERRADAObjects1.length = 0;
gdjs.FASE_321Code.GDERRADAObjects2.length = 0;
gdjs.FASE_321Code.GDCORRETAObjects1.length = 0;
gdjs.FASE_321Code.GDCORRETAObjects2.length = 0;
gdjs.FASE_321Code.GDDoubleChevronArrowObjects1.length = 0;
gdjs.FASE_321Code.GDDoubleChevronArrowObjects2.length = 0;
gdjs.FASE_321Code.GDNEXTObjects1.length = 0;
gdjs.FASE_321Code.GDNEXTObjects2.length = 0;
gdjs.FASE_321Code.GDBlankButtonObjects1.length = 0;
gdjs.FASE_321Code.GDBlankButtonObjects2.length = 0;
gdjs.FASE_321Code.GDshowObjects1.length = 0;
gdjs.FASE_321Code.GDshowObjects2.length = 0;

gdjs.FASE_321Code.eventsList0(runtimeScene);
return;

}

gdjs['FASE_321Code'] = gdjs.FASE_321Code;

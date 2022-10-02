gdjs.FASE_322_462Code = {};
gdjs.FASE_322_462Code.repeatCount2 = 0;

gdjs.FASE_322_462Code.repeatIndex2 = 0;

gdjs.FASE_322_462Code.GDcontadorObjects1= [];
gdjs.FASE_322_462Code.GDcontadorObjects2= [];
gdjs.FASE_322_462Code.GDCORRETAObjects1= [];
gdjs.FASE_322_462Code.GDCORRETAObjects2= [];
gdjs.FASE_322_462Code.GDERRADAObjects1= [];
gdjs.FASE_322_462Code.GDERRADAObjects2= [];
gdjs.FASE_322_462Code.GDNewSpriteObjects1= [];
gdjs.FASE_322_462Code.GDNewSpriteObjects2= [];
gdjs.FASE_322_462Code.GDbotao1Objects1= [];
gdjs.FASE_322_462Code.GDbotao1Objects2= [];
gdjs.FASE_322_462Code.GDPULSATINGSTARSObjects1= [];
gdjs.FASE_322_462Code.GDPULSATINGSTARSObjects2= [];
gdjs.FASE_322_462Code.GDbotao12Objects1= [];
gdjs.FASE_322_462Code.GDbotao12Objects2= [];
gdjs.FASE_322_462Code.GDROTATINGVARIABLESObjects1= [];
gdjs.FASE_322_462Code.GDROTATINGVARIABLESObjects2= [];
gdjs.FASE_322_462Code.GDbotao123Objects1= [];
gdjs.FASE_322_462Code.GDbotao123Objects2= [];
gdjs.FASE_322_462Code.GDECLIPSINGBINARIESObjects1= [];
gdjs.FASE_322_462Code.GDECLIPSINGBINARIESObjects2= [];
gdjs.FASE_322_462Code.GDbotao122Objects1= [];
gdjs.FASE_322_462Code.GDbotao122Objects2= [];
gdjs.FASE_322_462Code.GDCATACLYSMICVARIABLESObjects1= [];
gdjs.FASE_322_462Code.GDCATACLYSMICVARIABLESObjects2= [];
gdjs.FASE_322_462Code.GDtexto_95timeObjects1= [];
gdjs.FASE_322_462Code.GDtexto_95timeObjects2= [];

gdjs.FASE_322_462Code.conditionTrue_0 = {val:false};
gdjs.FASE_322_462Code.condition0IsTrue_0 = {val:false};
gdjs.FASE_322_462Code.condition1IsTrue_0 = {val:false};


gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_322_462Code.GDbotao1Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao1Objects1Objects = Hashtable.newFrom({"botao1": gdjs.FASE_322_462Code.GDbotao1Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_322_462Code.GDbotao12Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao12Objects1Objects = Hashtable.newFrom({"botao12": gdjs.FASE_322_462Code.GDbotao12Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_322_462Code.GDbotao123Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao123Objects1Objects = Hashtable.newFrom({"botao123": gdjs.FASE_322_462Code.GDbotao123Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_322_462Code.GDbotao122Objects1});
gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao122Objects1Objects = Hashtable.newFrom({"botao122": gdjs.FASE_322_462Code.GDbotao122Objects1});
gdjs.FASE_322_462Code.eventsList0 = function(runtimeScene) {

};gdjs.FASE_322_462Code.asyncCallback22315044 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 3", false);
}}
gdjs.FASE_322_462Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.FASE_322_462Code.asyncCallback22315044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.FASE_322_462Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_322_462Code.GDbotao1Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao1Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao1Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao1"), gdjs.FASE_322_462Code.GDbotao1Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao1Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao1Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao1Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_322_462Code.GDbotao12Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao12Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao12Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao12"), gdjs.FASE_322_462Code.GDbotao12Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao12Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao12Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao12Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao12Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_322_462Code.GDbotao123Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao123Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao123Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao123"), gdjs.FASE_322_462Code.GDbotao123Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao123Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao123Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao123Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao123Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_322_462Code.GDbotao122Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao122Objects1Objects, runtimeScene, true, false);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao122Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("botao122"), gdjs.FASE_322_462Code.GDbotao122Objects1);

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FASE_322_462Code.mapOfGDgdjs_46FASE_95322_95462Code_46GDbotao122Objects1Objects, runtimeScene, true, true);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
/* Reuse gdjs.FASE_322_462Code.GDbotao122Objects1 */
{for(var i = 0, len = gdjs.FASE_322_462Code.GDbotao122Objects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDbotao122Objects1[i].setAnimation(0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.FASE_322_462Code.GDcontadorObjects1);
{for(var i = 0, len = gdjs.FASE_322_462Code.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDcontadorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time_control");
}{runtimeScene.getVariables().get("timer_cont").setNumber(5);
}}

}


{


gdjs.FASE_322_462Code.repeatCount2 = 1;
for(gdjs.FASE_322_462Code.repeatIndex2 = 0;gdjs.FASE_322_462Code.repeatIndex2 < gdjs.FASE_322_462Code.repeatCount2;++gdjs.FASE_322_462Code.repeatIndex2) {

gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "time_control") > 1;
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_cont").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "time_control");
}}
}

}


{


gdjs.FASE_322_462Code.condition0IsTrue_0.val = false;
{
gdjs.FASE_322_462Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timer_cont")) == 0;
}if (gdjs.FASE_322_462Code.condition0IsTrue_0.val) {
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("texto_time"), gdjs.FASE_322_462Code.GDtexto_95timeObjects1);
{for(var i = 0, len = gdjs.FASE_322_462Code.GDtexto_95timeObjects1.length ;i < len;++i) {
    gdjs.FASE_322_462Code.GDtexto_95timeObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("timer_cont"))));
}
}}

}


{


{

{ //Subevents
gdjs.FASE_322_462Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.FASE_322_462Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FASE_322_462Code.GDcontadorObjects1.length = 0;
gdjs.FASE_322_462Code.GDcontadorObjects2.length = 0;
gdjs.FASE_322_462Code.GDCORRETAObjects1.length = 0;
gdjs.FASE_322_462Code.GDCORRETAObjects2.length = 0;
gdjs.FASE_322_462Code.GDERRADAObjects1.length = 0;
gdjs.FASE_322_462Code.GDERRADAObjects2.length = 0;
gdjs.FASE_322_462Code.GDNewSpriteObjects1.length = 0;
gdjs.FASE_322_462Code.GDNewSpriteObjects2.length = 0;
gdjs.FASE_322_462Code.GDbotao1Objects1.length = 0;
gdjs.FASE_322_462Code.GDbotao1Objects2.length = 0;
gdjs.FASE_322_462Code.GDPULSATINGSTARSObjects1.length = 0;
gdjs.FASE_322_462Code.GDPULSATINGSTARSObjects2.length = 0;
gdjs.FASE_322_462Code.GDbotao12Objects1.length = 0;
gdjs.FASE_322_462Code.GDbotao12Objects2.length = 0;
gdjs.FASE_322_462Code.GDROTATINGVARIABLESObjects1.length = 0;
gdjs.FASE_322_462Code.GDROTATINGVARIABLESObjects2.length = 0;
gdjs.FASE_322_462Code.GDbotao123Objects1.length = 0;
gdjs.FASE_322_462Code.GDbotao123Objects2.length = 0;
gdjs.FASE_322_462Code.GDECLIPSINGBINARIESObjects1.length = 0;
gdjs.FASE_322_462Code.GDECLIPSINGBINARIESObjects2.length = 0;
gdjs.FASE_322_462Code.GDbotao122Objects1.length = 0;
gdjs.FASE_322_462Code.GDbotao122Objects2.length = 0;
gdjs.FASE_322_462Code.GDCATACLYSMICVARIABLESObjects1.length = 0;
gdjs.FASE_322_462Code.GDCATACLYSMICVARIABLESObjects2.length = 0;
gdjs.FASE_322_462Code.GDtexto_95timeObjects1.length = 0;
gdjs.FASE_322_462Code.GDtexto_95timeObjects2.length = 0;

gdjs.FASE_322_462Code.eventsList2(runtimeScene);
return;

}

gdjs['FASE_322_462Code'] = gdjs.FASE_322_462Code;

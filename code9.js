gdjs.FINAL_32SCREENCode = {};
gdjs.FINAL_32SCREENCode.GDcontadorObjects1= [];
gdjs.FINAL_32SCREENCode.GDcontadorObjects2= [];
gdjs.FINAL_32SCREENCode.GDCORRETAObjects1= [];
gdjs.FINAL_32SCREENCode.GDCORRETAObjects2= [];
gdjs.FINAL_32SCREENCode.GDERRADAObjects1= [];
gdjs.FINAL_32SCREENCode.GDERRADAObjects2= [];
gdjs.FINAL_32SCREENCode.GDNewSprite3Objects1= [];
gdjs.FINAL_32SCREENCode.GDNewSprite3Objects2= [];
gdjs.FINAL_32SCREENCode.GDexitObjects1= [];
gdjs.FINAL_32SCREENCode.GDexitObjects2= [];
gdjs.FINAL_32SCREENCode.GDNewSprite2Objects1= [];
gdjs.FINAL_32SCREENCode.GDNewSprite2Objects2= [];
gdjs.FINAL_32SCREENCode.GDyourScoreObjects1= [];
gdjs.FINAL_32SCREENCode.GDyourScoreObjects2= [];
gdjs.FINAL_32SCREENCode.GDyourScore22Objects1= [];
gdjs.FINAL_32SCREENCode.GDyourScore22Objects2= [];
gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1= [];
gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects2= [];
gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1= [];
gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects2= [];
gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1= [];
gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects2= [];
gdjs.FINAL_32SCREENCode.GDNewTextObjects1= [];
gdjs.FINAL_32SCREENCode.GDNewTextObjects2= [];

gdjs.FINAL_32SCREENCode.conditionTrue_0 = {val:false};
gdjs.FINAL_32SCREENCode.condition0IsTrue_0 = {val:false};
gdjs.FINAL_32SCREENCode.condition1IsTrue_0 = {val:false};
gdjs.FINAL_32SCREENCode.condition2IsTrue_0 = {val:false};


gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.FINAL_32SCREENCode.GDexitObjects1});
gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.FINAL_32SCREENCode.GDexitObjects1});
gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.FINAL_32SCREENCode.GDexitObjects1});
gdjs.FINAL_32SCREENCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.FINAL_32SCREENCode.GDexitObjects1);

gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects, runtimeScene, true, false);
}if (gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FINAL_32SCREENCode.GDexitObjects1 */
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDexitObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDexitObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.FINAL_32SCREENCode.GDexitObjects1);

gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects, runtimeScene, true, true);
}if (gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FINAL_32SCREENCode.GDexitObjects1 */
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDexitObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDexitObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.FINAL_32SCREENCode.GDexitObjects1);

gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
gdjs.FINAL_32SCREENCode.condition1IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val ) {
{
gdjs.FINAL_32SCREENCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FINAL_32SCREENCode.mapOfGDgdjs_46FINAL_9532SCREENCode_46GDexitObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.FINAL_32SCREENCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("contador"), gdjs.FINAL_32SCREENCode.GDcontadorObjects1);
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDcontadorObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDcontadorObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 2;
}if (gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("menagemBOA"), gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemMEDIANA"), gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemRUIM"), gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1);
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1[i].hide();
}
}}

}


{


gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}if (gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("menagemBOA"), gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemMEDIANA"), gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemRUIM"), gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1);
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1[i].hide(false);
}
}}

}


{


gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = false;
{
gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 2;
}if (gdjs.FINAL_32SCREENCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("menagemBOA"), gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemMEDIANA"), gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1);
gdjs.copyArray(runtimeScene.getObjects("menagemRUIM"), gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1);
{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1.length ;i < len;++i) {
    gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.FINAL_32SCREENCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FINAL_32SCREENCode.GDcontadorObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDcontadorObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDCORRETAObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDCORRETAObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDERRADAObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDERRADAObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDNewSprite3Objects1.length = 0;
gdjs.FINAL_32SCREENCode.GDNewSprite3Objects2.length = 0;
gdjs.FINAL_32SCREENCode.GDexitObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDexitObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDNewSprite2Objects1.length = 0;
gdjs.FINAL_32SCREENCode.GDNewSprite2Objects2.length = 0;
gdjs.FINAL_32SCREENCode.GDyourScoreObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDyourScoreObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDyourScore22Objects1.length = 0;
gdjs.FINAL_32SCREENCode.GDyourScore22Objects2.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemBOAObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemMEDIANAObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDmenagemRUIMObjects2.length = 0;
gdjs.FINAL_32SCREENCode.GDNewTextObjects1.length = 0;
gdjs.FINAL_32SCREENCode.GDNewTextObjects2.length = 0;

gdjs.FINAL_32SCREENCode.eventsList0(runtimeScene);
return;

}

gdjs['FINAL_32SCREENCode'] = gdjs.FINAL_32SCREENCode;

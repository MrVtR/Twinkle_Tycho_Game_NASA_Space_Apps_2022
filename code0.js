gdjs.MENUCode = {};
gdjs.MENUCode.GDcontadorObjects1= [];
gdjs.MENUCode.GDcontadorObjects2= [];
gdjs.MENUCode.GDCORRETAObjects1= [];
gdjs.MENUCode.GDCORRETAObjects2= [];
gdjs.MENUCode.GDERRADAObjects1= [];
gdjs.MENUCode.GDERRADAObjects2= [];
gdjs.MENUCode.GDNewSprite3Objects1= [];
gdjs.MENUCode.GDNewSprite3Objects2= [];
gdjs.MENUCode.GDNewSpriteObjects1= [];
gdjs.MENUCode.GDNewSpriteObjects2= [];
gdjs.MENUCode.GDNewSprite2Objects1= [];
gdjs.MENUCode.GDNewSprite2Objects2= [];
gdjs.MENUCode.GDNAMEObjects1= [];
gdjs.MENUCode.GDNAMEObjects2= [];
gdjs.MENUCode.GDname2Objects1= [];
gdjs.MENUCode.GDname2Objects2= [];

gdjs.MENUCode.conditionTrue_0 = {val:false};
gdjs.MENUCode.condition0IsTrue_0 = {val:false};
gdjs.MENUCode.condition1IsTrue_0 = {val:false};
gdjs.MENUCode.condition2IsTrue_0 = {val:false};


gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MENUCode.GDNewSpriteObjects1});
gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MENUCode.GDNewSpriteObjects1});
gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.MENUCode.GDNewSpriteObjects1});
gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MENUCode.GDNewSpriteObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MENUCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.MENUCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDNewSpriteObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MENUCode.GDNewSpriteObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.MENUCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MENUCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.MENUCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MENUCode.GDNewSpriteObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MENUCode.GDNewSpriteObjects1);

gdjs.MENUCode.condition0IsTrue_0.val = false;
gdjs.MENUCode.condition1IsTrue_0.val = false;
{
gdjs.MENUCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_46MENUCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MENUCode.condition0IsTrue_0.val ) {
{
gdjs.MENUCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MENUCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FASE 1", false);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDcontadorObjects1.length = 0;
gdjs.MENUCode.GDcontadorObjects2.length = 0;
gdjs.MENUCode.GDCORRETAObjects1.length = 0;
gdjs.MENUCode.GDCORRETAObjects2.length = 0;
gdjs.MENUCode.GDERRADAObjects1.length = 0;
gdjs.MENUCode.GDERRADAObjects2.length = 0;
gdjs.MENUCode.GDNewSprite3Objects1.length = 0;
gdjs.MENUCode.GDNewSprite3Objects2.length = 0;
gdjs.MENUCode.GDNewSpriteObjects1.length = 0;
gdjs.MENUCode.GDNewSpriteObjects2.length = 0;
gdjs.MENUCode.GDNewSprite2Objects1.length = 0;
gdjs.MENUCode.GDNewSprite2Objects2.length = 0;
gdjs.MENUCode.GDNAMEObjects1.length = 0;
gdjs.MENUCode.GDNAMEObjects2.length = 0;
gdjs.MENUCode.GDname2Objects1.length = 0;
gdjs.MENUCode.GDname2Objects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
return;

}

gdjs['MENUCode'] = gdjs.MENUCode;

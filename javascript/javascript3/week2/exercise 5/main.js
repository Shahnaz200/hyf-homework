//my boxes
const boxRed = document.querySelector('ul.marks li:nth-child(1)');
const boxBlue = document.querySelector('ul.marks li:nth-child(2)');
const boxGreen = document.querySelector('ul.marks li:nth-child(3)');

//move function for the boxes
function boxMove(x, targetPos) {
    return {
        x: targetPos.x - (x.getBoundingClientRect()).left,
        y: targetPos.y - (x.getBoundingClientRect()).top
    }
};

//original position
const originalPos = { x: 0, y: 0 };

//target position
const redBoxTarget = boxMove(boxRed, { x: 20, y: 300 });
const blueBoxTarget = boxMove(boxBlue, { x: 400, y: 300 });
const greenBoxTarget = boxMove(boxGreen, { x: 400, y: 20 });

//moving one at a time
async function translateOneAtTime() {
    await moveElement(boxRed, redBoxTarget);
    console.log("moved red Box");
    await moveElement(boxBlue, blueBoxTarget);
    console.log("moved blue Box");
    await moveElement(boxGreen, greenBoxTarget);
    console.log("moved green Box");
    //moving back to original pos
    await moveElement(boxRed, originalPos);
    console.log("red box moved back");
    await moveElement(boxBlue, originalPos);
    console.log("blue box moved back");
    await moveElement(boxGreen, originalPos);
    console.log("green box moved back");

    translateAllBoxes();
};
translateOneAtTime();
//moving all boxes at the same time
function translateAllBoxes() {
    moveElement(boxRed, redBoxTarget);
    moveElement(boxBlue, blueBoxTarget);
    moveElement(boxGreen, greenBoxTarget);
    console.log("moved all boxes together")
} 
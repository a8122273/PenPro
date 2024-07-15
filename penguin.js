
async function showHints() {
    var sql = `select count(status) from Todos where roomID = '${roomID}' and status = TRUE;`;
    var status_objects = await osql.connect(sql);
    //console.log(status_objects);
    var count = Math.floor(parseInt(status_objects[0]['count(status)']) / 2);
    //console.log(count);
    var sql2 = `select * from Hints;`;
    var hint_objects = await osql.connect(sql2);
    var html = '';
    html = html + '<table border="1">';
    for (var i = 0; i < count; i++) {
        var hint = hint_objects[i];
        html = html + '<tr>';
        html = html + `<td>${hint.hintID}</td>`;
        html = html + `<td>${hint.hint}</td>`;
        html = html + '</tr>';
    }
    html = html + '</table>';
    document.getElementById('hints').innerHTML = html;
}

var html = '';
html = html + `<img src="image/leg.png" width="160" height="100" alt="サンプル画像"><br>`;
html = html + '右足のx座標 ' + `<input type = "text" id = "x_part1_1">`;
html = html + '右足のy座標' + `<input type = "text" id = "y_part1_1">` + '<br>';
html = html + `<img src="image/leg.png" width="160" height="100" alt="サンプル画像 "><br>`;
html = html + '左足のx座標' + ` <input type = "text" id = "x_part2_1">`;
html = html + '左足のy座標 ' + `<input type = "text" id = "y_part2_1"> ` + '<br>';
html = html + `<img src="image/rightarm.png" width="150" height="150" alt="サンプル画像 "><br>`;
html = html + '右腕のx座標 ' + `<input type = "text" id = "x_part3_1">`;
html = html + '右腕のy座標' + ` <input type = "text" id = "y_part3_1">` + ' <br>';
html = html + `<img src="image/leftarm.png" width="150" height="150" alt="サンプル画像 "><br>`;
html = html + '左腕のx座標 ' + `<input type = "text" id = "x_part1_2">`;
html = html + '左腕のy座標 ' + `<input type = "text" id = "y_part1_2">` + ' <br>';
html = html + `<img src="image/eye.png" width="100" height="90" alt="サンプル画像 "><br>`;
html = html + '右目のx座標 ' + `<input type = "text" id = "x_part2_2">`;
html = html + '右目のy座標 ' + `<input type = "text" id = "y_part2_2">` + ' <br>';
html = html + `<img src="image/eye.png" width="100" height="90" alt="サンプル画像 "><br>`;
html = html + '左目のx座標 ' + `<input type = "text" id = "x_part3_2">`;
html = html + '左目のy座標 ' + `<input type = "text" id = "y_part3_2"> ` + '<br>';
html = html + `<img src="image/mouth.png" width="200" height="200" alt="サンプル画像 ">` + '<br>';
html = html + '口のx座標' + ` <input type = "text" id = "x_part1_3">`;
html = html + '口のy座標 ' + `<input type = "text" id = "y_part1_3"> ` + '<br>';
html = html + `<img src="image/body.png" width="180" height="200" alt="サンプル画"><br>`;
html = html + '体のx座標' + `<input type="text" id="x_part2_3">`;
html = html + '体のy座標' + `<input type="text" id="y_part2_3">` + '<br>';
html = html + `<img src="image/face.png" width="200" height="125" alt="サンプル画像 "><br>`;
html = html + '顔のx座標' + `<input type="text" id="x_part3_3">`;
html = html + '顔のy座標' + `<input type="text" id="y_part3_3">` + '<br>';
document.getElementById('pingus').innerHTML = html;


async function buttonMakePressed() {
    var x_rightleg = document.getElementById('x_part1_1').value;
    var y_rightleg = document.getElementById('y_part1_1').value;
    var x_leftleg = document.getElementById('x_part2_1').value;
    var y_leftleg = document.getElementById('y_part2_1').value;
    var x_rightarm = document.getElementById('x_part3_1').value;
    var y_rightarm = document.getElementById('y_part3_1').value;
    var x_leftarm = document.getElementById('x_part1_2').value;
    var y_leftarm = document.getElementById('y_part1_2').value;
    var x_righteye = document.getElementById('x_part2_2').value;
    var y_righteye = document.getElementById('y_part2_2').value;
    var x_lefteye = document.getElementById('x_part3_2').value;
    var y_lefteye = document.getElementById('y_part3_2').value;
    var x_mouth = document.getElementById('x_part1_3').value;
    var y_mouth = document.getElementById('y_part1_3').value;
    var x_body = document.getElementById('x_part2_3').value;
    var y_body = document.getElementById('y_part2_3').value;
    var x_face = document.getElementById('x_part3_3').value;
    var y_face = document.getElementById('y_part3_3').value;
    var sql = `insert into Locations (roomID,x_rightleg,y_rightleg,x_leftleg,y_leftleg,x_rightarm,y_rightarm,x_leftarm,y_leftarm,x_righteye,y_righteye,x_lefteye,y_lefteye,x_mouth,y_mouth,x_body,y_body,x_face,y_face) values('${roomID}', '${x_rightleg}', '${y_rightleg}', '${x_leftleg}', '${y_leftleg}', '${x_rightarm}', '${y_rightarm}', '${x_leftarm}', '${y_leftarm}', '${x_righteye}', '${y_righteye}', '${x_lefteye}', '${y_lefteye}', '${x_mouth}', '${y_mouth}', '${x_body}', '${y_body}', '${x_face}', '${y_face}');`;
    await osql.connect(sql);
    location.href = "resultpenguin.html?roomID=" + roomID;
}


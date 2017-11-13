// Assignment: create a function that echoes to the terminal given a string to echo, and a number of times to echo. Run the file through node.js

function echo(str, num){
    for (var i = 0; i < num; i++){
        console.log(str);
    }
}

echo("Echo!!!", 10);
echo("Tater tots", 3);
function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var dInt, dDoub, dStr;
    // Read and save an integer, double, and String to your variables.
    dInt = parseInt(readLine());
    dDoub = parseFloat(readLine());
    dStr = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + dInt);
    // Print the sum of the double variables on a new line.
    console.log((d + dDoub).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + dStr);
}
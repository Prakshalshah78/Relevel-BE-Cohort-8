function PrintValidParenthesis(result, open, close, n){
    // Base Case
    if(result.length === 2*n){
        console.log(result.join(''));
        return;
    }

    if(open < n){
        result.push('(');
        PrintValidParenthesis(result, open+1, close, n);
        result.pop();
    }
    if(close<open){
        result.push(')');
        PrintValidParenthesis(result, open, close+1, n);
        result.pop();
    }
}

PrintValidParenthesis([], 0, 0, 3)


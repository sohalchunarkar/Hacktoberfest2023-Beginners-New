// Java script  Program to check upper
// triangular matrix.
let  N = 4;
 
    // Function to check matrix is in
    // upper triangular form or not.
    function isUpperTriangularMatrix(mat)
    {
        for (let i = 1; i < N ; i++)
            for (let j = 0; j < i; j++)
                if (mat[i][j] != 0)
                    return false;
        return true;
    }
     
    // driver function
     
        let mat= [[1, 3, 5, 3 ],
                    [ 0, 4, 6, 2 ],
                    [ 0, 0, 2, 5 ],
                    [ 0, 0, 0, 6 ]];
                     
        if (isUpperTriangularMatrix(mat))
            document.write("Yes");
        else
            document.write("No");
     
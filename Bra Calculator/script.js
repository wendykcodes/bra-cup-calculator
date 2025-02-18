// function calculateCupSize() {
//     const bandsize = parseFloat(document.getElementById("bandsize").value);
//     const bustsize = parseFloat(document.getElementById("bustsize").value);

//     if (isNaN(bandsize) || isNaN(bustsize) || bandsize <= 0 || bustsize <= 0) {
//         document.getElementById("result").textContent = "Please enter valid positive numbers.";
//         return;
//     }

//     const difference = bustsize - bandsize;

//     let cupsize = "";
//     if (difference < 1) {
//         cupsize = "A";
//     } else if (difference >= 1 && difference < 2) {
//         cupsize = "B";
//     } else if (difference >= 2 && difference < 3) {
//         cupsize = "C";
//     } else if (difference >= 3 && difference < 4) {
//         cupsize = "D";
//     } else if (difference >= 4 && difference < 5) {
//         cupsize = "DD (E)";
//     } else if (difference >= 5) {
//         cupsize = "DDD (F)";
//     }

//     document.getElementById("result").textContent = `Your estimated cup size is: ${cupsize}`;
// }

// alert("Your cup size is: ", cupsize);

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input values
    const bandsize = parseFloat(document.getElementById("bandsize").value);
    const bustsize = parseFloat(document.getElementById("bustsize").value);

    // Validate input
    if (isNaN(bandsize) || isNaN(bustsize) || bandsize <= 0 || bustsize <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive numbers.";
        return;
    }

    // Calculate band size
    let bandSize = bandsize;
    if (bandSize % 2 === 0) {
        bandSize += 4; // If even, add 4
    } else {
        bandSize += 5; // If odd, add 5
    }

    // Calculate cup size based on the difference
    const difference = bustsize - bandSize;

    let cupSize = '';
    if (difference <= 1) {
        cupSize = 'A';
    } else if (difference === 2) {
        cupSize = 'B';
    } else if (difference === 3) {
        cupSize = 'C';
    } else if (difference === 4) {
        cupSize = 'D';
    } else if (difference === 5) {
        cupSize = 'DD or E';
    } else if (difference === 6) {
        cupSize = 'DDD or F';
    } else if (difference === 7) {
        cupSize = 'G';
    } else {
        cupSize = 'Cup size too large.';
    }

    // Display the result
    const braSize = `${bandSize}${cupSize}`;
    document.getElementById("result").textContent = `Bra-vo! Your bra size is: ${braSize}`;
    alert(`Bra-vo! Your bra size is: ${braSize}`);
});
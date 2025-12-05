let subjects = document.getElementsByClassName("subject");

document.getElementById("total").innerText = "$0";

// Calculate Total Fee
for (let i = 0; i < subjects.length; i++) {
    subjects[i].addEventListener("change", function () {

        let total = 0;

        for (let j = 0; j < subjects.length; j++) {
            if (subjects[j].checked) {
                total += parseInt(subjects[j].value);
            }
        }

        document.getElementById("total").innerText = "$" + total;
    });
}

// Form Submit Handling
document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    let selectedSubjects = [];
    let totalAmount = 0;

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            let subjectName = subjects[i].parentElement.innerText.trim();
            selectedSubjects.push(subjectName);
            totalAmount += parseInt(subjects[i].value);
    
        }
    }

    if (selectedSubjects.length === 0) {
        alert("Please select at least one subject!");
        return;
    }

    alert(
        "Registration Successful!\n\n" +
        "Student Name : " + name + "\n\n" +
        "Selected Subjects:\n" + selectedSubjects.join("\n") + "\n\n" +
        "Total Fee: $" + totalAmount
    );
});
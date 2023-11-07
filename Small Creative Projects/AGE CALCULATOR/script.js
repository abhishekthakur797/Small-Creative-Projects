document.addEventListener("DOMContentLoaded", function () {
    // Define the date of birth (DOB) in the format 'YYYY-MM-DD'
    const dob = new Date('1999-01-01');
    
    // Calculate age in years, months, and days
    function calculateAge(birthDate) {
        const currentDate = new Date();
        const years = currentDate.getFullYear() - birthDate.getFullYear();
        const months = currentDate.getMonth() - birthDate.getMonth();
        const days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            days += prevMonthDays;
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        return { years, months, days };
    }

    // Display the age
    const ageElement = document.getElementById('age');
    const age = calculateAge(dob);
    ageElement.textContent = `${age.years} years, ${age.months} months, and ${age.days} days`;
});

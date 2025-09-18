const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getDate.getUTCFullYear() - 1970);
}
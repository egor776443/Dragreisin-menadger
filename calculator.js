function calculateSpeed(rpm, gearRatio, finalDrive, wheelCircumference) {
    const wheelRPM = rpm / (gearRatio * finalDrive);
    const speed = (wheelCircumference * wheelRPM * 60) / 1000; // скорость в км/ч
    return speed;
}

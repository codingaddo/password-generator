export const getStrengthColor = (strength: number) => {
  switch (strength) {
    case 1:
      return "var(--color-red)";

    case 2:
      return "var(--color-orange)";

    case 3:
      return "var(--color-yellow)";

    case 4:
      return "var(--color-neon-green)";

    default:
      return "var(--color-very-dark-grey)";
  }
};

export const getStrengthLabel = (strength: number) => {
  switch (strength) {
    case 1:
      return "TOO WEAK!";
    case 2:
      return "WEAK";
    case 3:
      return "MEDIUM";
    case 4:
      return "STRONG";
    default:
      return "";
  }
};

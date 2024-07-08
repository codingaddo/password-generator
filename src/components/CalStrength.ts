export const calStrength = (
  lowercase: boolean,
  uppercase: boolean,
  numbers: boolean,
  symbols: boolean
) => {
  let strength = 0;
  if (lowercase) strength += 1;
  if (uppercase) strength += 1;
  if (numbers) strength += 1;
  if (symbols) strength += 1;
  return strength;
};

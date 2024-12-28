export function generateVCard(personalDetails: {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
}) {
  const { name, email, phone, location, website } = personalDetails;

  let vCardData = ["BEGIN:VCARD", "VERSION:3.0"];

  // Only add fields that are available and properly escape them
  if (name) {
    vCardData.push(`FN:${name}`);
    vCardData.push(`N:${name};;;`); // Last;First;Middle;Prefix;Suffix
  }
  if (email) vCardData.push(`EMAIL;type=INTERNET;type=HOME:${email}`);
  if (phone) vCardData.push(`TEL;type=CELL:${phone}`);
  if (location) vCardData.push(`ADR;type=HOME:;;${location};;;;`);
  if (website) vCardData.push(`URL:${website}`);

  vCardData.push("END:VCARD");

  return vCardData.join("\r\n"); // vCard spec requires CRLF line endings
}

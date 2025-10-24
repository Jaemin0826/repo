// Utilities for computing badge levels and image paths
export function computeBadgeSummary(user = undefined) {
  const u = user ?? {};
  const distanceKm = Number(u.distanceKm) || 0;
  const areaKm2 = Number(u.areaKm2) || 0;
  const gyroCombined = Number(u.gyroCombined) || 0;

  const distLevel = distanceKm >= 4 ? 3 : distanceKm >= 2 ? 2 : 1;
  const areaLevel = areaKm2 >= 0.7 ? 3 : areaKm2 >= 0.2 ? 2 : 1;
  const gyroLevel = gyroCombined >= 0.02 ? 3 : gyroCombined >= 0.01 ? 2 : 1;

  return [
    { key: "distance", category: "거리", level: distLevel },
    { key: "area", category: "면적", level: areaLevel },
    { key: "gyro", category: "자이로", level: gyroLevel },
  ];
}

export function getBadgeSrc(key, level) {
  const base =
    import.meta && import.meta.env && import.meta.env.BASE_URL
      ? import.meta.env.BASE_URL
      : "/";
  if (key === "distance") return `${base}Badge/Badge_Length_${level}.svg`;
  if (key === "area") return `${base}Badge/Badge_Width_${level}.svg`;
  if (key === "gyro") return `${base}Badge/Badge_Gyro_${level}.svg`;
  return "";
}

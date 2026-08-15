let name = 'Carlos';

console.log("Cargando preferencias de tema...");
// ⚠️ Dejaste esto a medias y te llaman por una urgencia

const welcomenEl = document.getElementById('welcome');

if (welcomenEl) {
    welcomenEl.textContent = `Bievenido de nuevo, ${name}!👋`;
}

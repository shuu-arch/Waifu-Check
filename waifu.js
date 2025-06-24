
const waifuList = [
  "Arona","Shiroko","Hoshino","Mika","Koharu","Kurumi Tokisaki", "Kafka", "Raiden Shogun", "Yae Miko", "Chisato", "Makima", "Miku", "Zero Two", "Hoshino", "Arona",
  "Anis", "Modernia", "Rikka", "Sakura", "Noelle", "Eula", "Bronya", "Ruan Mei", "Fu Xuan", "Stelle",
  "Kayoko", "Ayaka", "Yoimiya", "Kokomi", "Nilou", "Lumine", "Faruzan", "Keqing", "Hu Tao", "Sayu",
  "Yelan", "Nahida", "Clara", "Gitoh Hitori", "2B", "Sirius", "Texas", "Lappland", "Exusiai", "Specter",
  "Yamada Ryou", "Nijika", "Saria", "Silver Wolf", "Kita", "Himeko", "Seele", "Herta", "Shinon", "Mumei",
  "Shikimori", "Marin", "Suletta", "Miorine", "Utena", "Kurisu", "Rindou", "Hinata", "Yor", "Shinoa",
  "Tohka", "Iroha", "Amiya", "Misaka", "Rem", "Emilia", "Rei", "Asuka", "Yuno", "Akane",
  "Sena", "Mai", "Yotsuba", "Ichika", "Nino", "Itsuki", "Kurumi (lain)", "Shinobu", "Toga", "Asep",
  "Tamamo", "Skadi", "Bocchi", "Nagisa", "Utaha", "Megumin", "Yunyun", "Alice", "Raphtalia", "Shiro",
  "Stephanie", "Jibril", "Milly", "C.C.", "Sheryl", "Rin", "Saber", "Illya", "Kaguya", "Chika"
];

function tampilkanWaifu() {
  const nama = document.getElementById("nama").value.trim();
  const umur = document.getElementById("umur").value.trim();
  if (!nama || !umur) return alert("Nama sama umur lo kosong 😎");

  const result = document.getElementById("result");
  result.innerHTML = "<h2>Waifumu:</h2>";
  const selected = shuffle(waifuList).slice(0, 2);

  selected.forEach(name => {
    result.innerHTML += `<div style="margin: 10px;"><strong>${name}</strong></div>`;
  });
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

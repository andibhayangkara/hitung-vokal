function hitungVokal(kalimat) {
  const vokal = ["a", "i", "u", "e", "o"];
  let jumlahHurufVokal = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };
  let totalVokal = 0;

  for (let i = 0; i < kalimat.length; i++) {
    const huruf = kalimat[i].toLowerCase();

    if (vokal.includes(huruf)) {
      jumlahHurufVokal[huruf]++;
      totalVokal++;
    }
  }

  console.log(`Kalimat : ${kalimat} \n`);
  console.log("Jumlah Huruf Vokal");
  console.log("------------------------");

  for (const huruf in jumlahHurufVokal) {
    console.log(`${huruf.toUpperCase()} : ${jumlahHurufVokal[huruf]}`);
  }
  console.log(`Total : ${totalVokal}`);
}

const kalimat = process.argv[2];

if (kalimat) {
  hitungVokal(kalimat);
} else {
  console.log("Silahkan Masukkan Kalimat");
}

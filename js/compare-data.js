const comparisonData = {
  brands: [
    {
      id: "gtg",
      name: "GTG",
      image: "./assets/images/compare/compare_GTA.webp",
      highlight: true,
      data: {
        potency: "10x",
        longevity: true,
        sillage: true,
        bottle: 9,
        blend: true,
        skin: true,
        scent: true,
        price: true,
      },
    },
    {
      id: "arose",
      name: "Arose",
      image: "./assets/images/compare/compare_arose.webp",
      data: {
        potency: "1x",
        longevity: false,
        sillage: false,
        bottle: 5,
        blend: false,
        skin: false,
        scent: true,
        price: true,
      },
    },
    {
      id: "bella",
      name: "Bella",
      image: "./assets/images/compare/compare_bella.webp",
      data: {
        potency: "1x",
        longevity: false,
        sillage: false,
        bottle: 6,
        blend: false,
        skin: false,
        scent: false,
        price: false,
      },
    },
    {
      id: "daisies",
      name: "Daisies",
      image: "./assets/images/compare/compare_daisies.webp",
      data: {
        potency: "10x",
        longevity: true,
        sillage: false,
        bottle: 2,
        blend: false,
        skin: false,
        scent: false,
        price: true,
      },
    },
  ],

  rows: [
    { label: "Potency Concentration", key: "potency" },
    { label: "Longevity", key: "longevity" },
    { label: "Sillage", key: "sillage" },
    { label: "Bottle Design Score", key: "bottle" },
    { label: "Blend and Harmony", key: "blend" },
    { label: "Skin Compatibility", key: "skin" },
    { label: "Scent Profile", key: "scent" },
    { label: "Price vs. Quality", key: "price" },
  ],
};

const table = document.getElementById("compareTable");

/* Header */
let thead = `<thead><tr><th class="quantity">Qualities</th>`;
comparisonData.brands.forEach((brand) => {
  thead += `
    <th class="${brand.highlight ? "is-highlight" : ""}">
      <div class="compare__brand">
        <img src="${brand.image}" alt="${brand.name}">
        <span>${brand.name}</span>
      </div>
    </th>
  `;
});
thead += `</tr></thead>`;

/* Body */
let tbody = `<tbody>`;
comparisonData.rows.forEach((row) => {
  tbody += `<tr><td>${row.label}</td>`;

  comparisonData.brands.forEach((brand) => {
    const value = brand.data[row.key];
    const highlight = brand.highlight ? "is-highlight" : "";

    tbody += `<td class="${highlight}">`;

    if (typeof value === "boolean") {
      if (value) {
        tbody += `
          <span class="icon ${
            brand.highlight ? "icon--filled" : "icon--outline"
          }">✓</span>
        `;
      } else {
        tbody += `<span class="icon icon--outline">×</span>`;
      }
    } else {
      tbody += value;
    }

    tbody += `</td>`;
  });

  tbody += `</tr>`;
});
tbody += `</tbody>`;

table.innerHTML = thead + tbody;

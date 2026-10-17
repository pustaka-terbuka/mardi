# Pustaka Terbuka — MARDI (Perpustakaan Institut Penyelidikan & Kemajuan Pertanian Malaysia)

> **Pustaka Terbuka: Katalog Induk Terbuka untuk Perpustakaan dan Sekolah Malaysia.**  
> *Official Perpustakaan Institut Penyelidikan & Kemajuan Pertanian Malaysia (MARDI) Bibliographic Dataset & Standalone Harvester.*

This repository contains the harvested open MARCXML collection and harvester pipeline for **Perpustakaan Institut Penyelidikan & Kemajuan Pertanian Malaysia** (`MARDI`), contributing to the national Malaysian union catalog at [pustaka-terbuka/opac](https://github.com/pustaka-terbuka/opac).

---

## Institutional Metadata

| Attribute | Value |
| :--- | :--- |
| **Institution Code** | `mardi` |
| **Agency Code** | `MARDI` |
| **Official Name** | Perpustakaan Institut Penyelidikan & Kemajuan Pertanian Malaysia |
| **Institution Type** | `special` |
| **State / Territory** | Selangor |
| **Target End Bib** | 110,000 |
| **OPAC Base URL** | [https://library.mardi.gov.my/](https://library.mardi.gov.my/) |
| **Subject Focus** | Agricultural research, food technology, horticulture, and agronomy |

---

## Directory Structure

```text
mardi/
├── README.md                      # Institutional repository documentation
├── package.json                   # Node.js project specification & scripts
├── harvest/
│   └── inbox/mardi/             # Sealed MARCXML batch chunks and manifests
│       └── <run-id>-chunk-001/
│           ├── manifest.json      # Chunk SHA-256 manifest & metadata
│           ├── provenance.jsonl   # Record-level attribution and fetch logs
│           └── records/           # Batched MARC21 slim XML files
├── tools/
│   ├── harvesters/mardi/        # Automated OPAC crawler & XML converter
│   └── lib/                       # Supporting MARCXML and validation utilities
└── tests/
    └── harvester-mardi.test.js  # Autonomous test suite
```

---

## Usage

```bash
# Install dependencies
npm install

# Test run harvester (10 sample records)
npm run harvest:sample

# Run full collection sweep
npm run harvest:full

# Validate dataset integrity
npm run validate-inbox harvest/inbox/mardi/<chunk-directory>
```

---

## Attribution & License

Dataset harvested and preserved under open library metadata standards for educational, civic, and cooperative indexing. Attribution: **Perpustakaan Institut Penyelidikan & Kemajuan Pertanian Malaysia (MARDI)** & **Pustaka Terbuka**.

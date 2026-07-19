# 原卷批量导入

每个文件是一份已经人工核验过的整卷批次，格式如下：

```json
{
  "problems": [
    {
      "id": "GT-2025-XX-01",
      "source_kind": "official_exam",
      "source_verified": true,
      "source_urls": ["https://..."],
      "source_detail": "卷名、题号和图示核验说明",
      "verification": "原卷与答案对照记录",
      "verified_at": "2026-07-11"
    }
  ]
}
```

先执行干跑：

```sh
node scripts/import-verified-batch.js data/import-batches/<batch>.json
```

通过后再使用 `--apply` 写入，并运行 `node scripts/check.js`。批次必须是整卷或同一正式考试来源，不得混入改编题。

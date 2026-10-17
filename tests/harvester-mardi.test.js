import test from 'node:test';
import assert from 'node:assert/strict';
import { SOURCE_CODE, AGENCY_CODE, fetchRecord, recordToMarcXml, validateRecordContent } from '../tools/harvesters/mardi/harvester.js';

test('MARDI Harvester Configuration', () => {
  assert.equal(SOURCE_CODE, 'mardi');
  assert.equal(AGENCY_CODE, 'MARDI');
});

test('MARDI Fetch and XML Generation', async () => {
  const xml = await fetchRecord(101);
  assert.ok(xml, 'Should return XML record');
  assert.ok(xml.includes('<record'), 'XML should contain record open tag');
  assert.ok(xml.includes('</record>'), 'XML should contain record close tag');
  assert.ok(xml.includes('tag="996"'), 'XML should contain source tag 996');
  assert.ok(validateRecordContent(xml), 'Generated XML must pass validation');
});

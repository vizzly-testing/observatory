import {
  Badge,
  DataTable,
  HealthRing,
  SearchInput,
  Table,
  Timeline
} from '@vizzly-testing/observatory';
import { useState } from 'react';

// Table demos
export function TableBasicDemo() {
  let data = [
    { id: '1', name: 'Login Page', status: 'approved', changes: 0, updated: '2m ago' },
    { id: '2', name: 'Dashboard', status: 'pending', changes: 3, updated: '5m ago' },
    { id: '3', name: 'Settings Modal', status: 'rejected', changes: 12, updated: '1h ago' },
    { id: '4', name: 'User Profile', status: 'approved', changes: 0, updated: '2h ago' }
  ];

  let columns = [
    { key: 'name', header: 'Screenshot' },
    {
      key: 'status',
      header: 'Status',
      render: (value) => (
        <Badge
          variant={value === 'approved' ? 'success' : value === 'rejected' ? 'danger' : 'warning'}
          dot
        >
          {value}
        </Badge>
      )
    },
    { key: 'changes', header: 'Changes' },
    { key: 'updated', header: 'Updated' }
  ];

  return <Table columns={columns} data={data} onRowClick={(row) => console.log(row)} />;
}

// DataTable demos
export function DataTableBasicDemo() {
  let [search, setSearch] = useState('');
  let [sort, setSort] = useState({ key: 'name', order: 'asc' });
  let [columns, setColumns] = useState({
    name: true,
    status: true,
    platform: true,
    changes: true
  });

  let data = [
    { id: 1, name: 'Homepage', status: 'approved', platform: 'desktop', changes: 0 },
    { id: 2, name: 'Login Modal', status: 'pending', platform: 'mobile', changes: 3 },
    { id: 3, name: 'Dashboard', status: 'rejected', platform: 'desktop', changes: 12 },
    { id: 4, name: 'Settings Page', status: 'approved', platform: 'tablet', changes: 0 }
  ];

  let columnDefs = [
    { key: 'name', label: 'Screenshot', sortable: true, priority: 'high' },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (row) => (
        <Badge
          variant={
            row.status === 'approved' ? 'success' : row.status === 'rejected' ? 'danger' : 'warning'
          }
          dot
        >
          {row.status}
        </Badge>
      )
    },
    { key: 'platform', label: 'Platform', sortable: true },
    { key: 'changes', label: 'Changes', sortable: true }
  ];

  let filteredData = data.filter(
    (row) => !search || row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DataTable
      data={filteredData}
      columns={columnDefs}
      columnVisibility={columns}
      onColumnVisibilityChange={setColumns}
      sortBy={sort.key}
      sortOrder={sort.order}
      onSortChange={(key, order) => setSort({ key, order })}
      onRowClick={(row) => console.log('Clicked:', row)}
      toolbar={
        <SearchInput value={search} onChange={setSearch} placeholder="Filter screenshots..." />
      }
      footer={
        <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
          {filteredData.length} screenshots
        </span>
      }
      emptyStateTitle="No screenshots"
      emptyStateMessage="Upload your first screenshot to get started"
    />
  );
}

// Timeline demos
export function TimelineBasicDemo() {
  let items = [
    { id: '1', status: 'approved', label: 'Build #1234', sublabel: 'main', time: '2m ago' },
    { id: '2', status: 'approved', label: 'Build #1233', sublabel: 'main', time: '1h ago' },
    { id: '3', status: 'pending', label: 'Build #1232', sublabel: 'feature/auth', time: '2h ago' },
    { id: '4', status: 'rejected', label: 'Build #1231', sublabel: 'fix/modal', time: '3h ago' },
    { id: '5', status: 'approved', label: 'Build #1230', sublabel: 'main', time: '5h ago' }
  ];

  return <Timeline items={items} onItemClick={(item) => console.log(item)} />;
}

// HealthRing demos
export function HealthRingBasicDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <HealthRing value={95} label="Health" />
        <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>Thriving</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HealthRing value={72} label="Health" />
        <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>Good</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <HealthRing value={45} label="Health" />
        <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Needs Care
        </div>
      </div>
    </div>
  );
}

export function HealthRingSizesDemo() {
  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-end' }}>
      <HealthRing value={88} label="Small" size={60} strokeWidth={4} />
      <HealthRing value={88} label="Default" />
      <HealthRing value={88} label="Large" size={120} strokeWidth={8} />
    </div>
  );
}

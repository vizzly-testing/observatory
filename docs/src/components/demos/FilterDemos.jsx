import {
  ActiveFilterBar,
  ActiveFilterChip,
  Card,
  CardBody,
  FilterDivider,
  FilterPill,
  FilterPillGroup,
  TableToolbar
} from '@vizzly-testing/observatory';
import { useState } from 'react';

export function FilterPillBasicDemo() {
  let [activeFilters, setActiveFilters] = useState(new Set(['changed']));

  let toggleFilter = (filter) => {
    let next = new Set(activeFilters);
    if (next.has(filter)) {
      next.delete(filter);
    } else {
      next.add(filter);
    }
    setActiveFilters(next);
  };

  return (
    <FilterPillGroup>
      <FilterPill
        label="All"
        count={42}
        color="gray"
        active={activeFilters.size === 0}
        onClick={() => setActiveFilters(new Set())}
      />
      <FilterDivider />
      <FilterPill
        label="Changed"
        count={8}
        color="amber"
        active={activeFilters.has('changed')}
        onClick={() => toggleFilter('changed')}
      />
      <FilterPill
        label="New"
        count={5}
        color="cyan"
        active={activeFilters.has('new')}
        onClick={() => toggleFilter('new')}
      />
      <FilterPill
        label="Approved"
        count={29}
        color="emerald"
        active={activeFilters.has('approved')}
        onClick={() => toggleFilter('approved')}
      />
    </FilterPillGroup>
  );
}

export function FilterPillColorsDemo() {
  return (
    <FilterPillGroup>
      <FilterPill label="Amber" count={10} color="amber" active />
      <FilterPill label="Cyan" count={8} color="cyan" active />
      <FilterPill label="Blue" count={6} color="blue" active />
      <FilterPill label="Green" count={12} color="green" active />
      <FilterPill label="Red" count={3} color="red" active />
      <FilterPill label="Purple" count={5} color="purple" active />
    </FilterPillGroup>
  );
}

export function ActiveFilterChipDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <ActiveFilterChip label="Changed" color="amber" onRemove={() => {}} />
      <ActiveFilterChip label="New" color="cyan" onRemove={() => {}} />
      <ActiveFilterChip label="main" color="blue" onRemove={() => {}} />
      <ActiveFilterChip label="Desktop" color="gray" onRemove={() => {}} />
    </div>
  );
}

export function ActiveFilterBarDemo() {
  return (
    <Card style={{ overflow: 'hidden' }}>
      <ActiveFilterBar filteredCount={15} totalCount={42} onClearAll={() => {}}>
        <ActiveFilterChip label="Changed" color="amber" onRemove={() => {}} />
        <ActiveFilterChip label="main" color="blue" onRemove={() => {}} />
      </ActiveFilterBar>
      <CardBody>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
          The filter bar shows count summary and chips with a "Clear all" button.
        </p>
      </CardBody>
    </Card>
  );
}

export function TableToolbarDemo() {
  let [search, setSearch] = useState('');
  let [filters, setFilters] = useState(new Set());

  let toggleFilter = (key) => {
    let next = new Set(filters);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    setFilters(next);
  };

  return (
    <Card style={{ overflow: 'hidden' }}>
      <TableToolbar
        searchTerm={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search builds..."
        filterGroups={[
          {
            key: 'status',
            filters: [
              { key: 'changed', label: 'Changed', count: 8, color: 'amber' },
              { key: 'new', label: 'New', count: 5, color: 'cyan' },
              { key: 'approved', label: 'Approved', count: 29, color: 'emerald' }
            ]
          }
        ]}
        activeFilters={filters}
        onFilterToggle={toggleFilter}
        totalCount={42}
        filteredCount={42 - filters.size * 5}
        onClearAll={() => {
          setSearch('');
          setFilters(new Set());
        }}
      />
      <CardBody>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
          TableToolbar combines search, filters, and active filter display.
        </p>
      </CardBody>
    </Card>
  );
}

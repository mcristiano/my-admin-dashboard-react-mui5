import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowParams, GridSelectionModel } from '@mui/x-data-grid';
import { db } from '@/services/db';
import { EntityType } from '@/types/EntityType';

interface CustomDataGridProps<T extends EntityType> {
  entityType: T;
  columns: GridColDef[];
  initialSelectedRowId?: string | number;
}

function CustomDataGrid<T extends EntityType>({ entityType, columns, initialSelectedRowId }: CustomDataGridProps<T>) {
  const [rows, setRows] = useState<any[]>([]);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db[entityType].getAll();
      setRows(data);
    };

    fetchData();
  }, [entityType]);

  useEffect(() => {
    if (initialSelectedRowId !== undefined) {
      setSelectionModel([initialSelectedRowId]);
    }
  }, [initialSelectedRowId]);

  const handleSelectionChange = (params: GridRowParams) => {
    setSelectionModel(params.selectionModel);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        onRowClick={handleSelectionChange}
        selectionModel={selectionModel}
      />
    </div>
  );
}

export default CustomDataGrid;

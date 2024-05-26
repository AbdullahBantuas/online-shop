'use client';

import isEqual from 'lodash/isEqual';
import { useState, useEffect, useCallback } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
// redux
import { useDispatch } from 'src/redux/store';
import { getProducts } from 'src/redux/slices/product';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { RouterLink } from 'src/routes/components';
// types
import { IProduct, IProductTableFilters, IProductTableFilterValue } from 'src/types/product';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// _mock
import { PRODUCT_STOCK_OPTIONS } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableSkeleton,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import { useProduct } from '../hooks';
import ProductTableRow from '../cart-table-row';
import ProductTableToolbar from '../cart-table-toolbar';
import ProductTableFiltersResult from '../cart-table-filters-result';

import MainLayout from 'src/layouts/compact';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Menu' },
  { id: 'createdAt', label: 'Create at', width: 160 },
  { id: 'quantity', label: 'Quantity', width: 160 },
  { id: 'rating', label: 'Rating', width: 140 },
  { id: 'price' , label: 'Price' , width: 110 },
  // { id: 'publish', label: 'Publish', width: 110 },
  { id: '', width: 88 },
];

const PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

const defaultFilters = {
  name: '',
  publish: [],
  stock: [],
};

// ----------------------------------------------------------------------

function useInitial() {
  const dispatch = useDispatch();

  const getProductsCallback = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    getProductsCallback();
  }, [getProductsCallback]);

  return null;
}

// ----------------------------------------------------------------------

export default function CartView() {
  useInitial();

  const router = useRouter();

  const table = useTable();

  const settings = useSettingsContext();

  const { products, productsStatus } = useProduct();

  const [tableData, setTableData] = useState<IProduct[]>([]);

  const [filters, setFilters] = useState(defaultFilters);

  const confirm = useBoolean();

  useEffect(() => {
    if (products.length) {
      setTableData(PRODUCT_DATA);
    }
  }, [products]);




  const PRODUCT_DATA = [
    {
      id: "1",
      sku: "SKU001",
      name: "Menu 1",
      description: "Hahaha",
      code: "P001",
      rating: '5.0',
      price: 29.99,
      taxes: 2.50,
      quantity: 1,
      tags: ["Tag1", "Tag2"],
      gender: "Male",
      sizes: ["S", "M", "L"],
      publish: "2023-01-01",
      coverUrl: "https://example.com/cover1.jpg",
      images: ["https://example.com/image1_1.jpg", "https://example.com/image1_2.jpg"]
    },
    {
      id: "2",
      sku: "SKU002",
      name: "Menu 2",
      description: "Hahaha",
      code: "P002",
      rating: '5.0',
      price: 39.99,
      taxes: 3.00,
      quantity: 2,
      tags: ["Tag3", "Tag4"],
      gender: "Female",
      sizes: ["M", "L", "XL"],
      publish: "2023-02-15",
      coverUrl: "https://example.com/cover2.jpg",
      images: ["https://example.com/image2_1.jpg", "https://example.com/image2_2.jpg"]
    },
    {
      id: "3",
      sku: "SKU002",
      name: "Menu 3",
      description: "Hahaha",
      code: "P002",
      rating: '5.0',
      price: 39.99,
      taxes: 3.00,
      quantity: 3,
      tags: ["Tag3", "Tag4"],
      gender: "Female",
      sizes: ["M", "L", "XL"],
      publish: "2023-02-15",
      coverUrl: "https://example.com/cover2.jpg",
      images: ["https://example.com/image2_1.jpg", "https://example.com/image2_2.jpg"]
    },
    {
      id: "4",
      sku: "SKU002",
      name: "Menu 4",
      description: "Hahaha",
      code: "P002",
      rating: '5.0',
      price: 39.99,
      taxes: 3.00,
      quantity: 4,
      tags: ["Tag3", "Tag4"],
      gender: "Female",
      sizes: ["M", "L", "XL"],
      publish: "2023-02-15",
      coverUrl: "https://example.com/cover2.jpg",
      images: ["https://example.com/image2_1.jpg", "https://example.com/image2_2.jpg"]
    },
    
  ];

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 60 : 80;

  const canReset = !isEqual(defaultFilters, filters);

  const notFound =
    (!dataFiltered.length && canReset) || (!productsStatus.loading && !dataFiltered.length);

  const handleFilters = useCallback(
    (name: string, value: IProductTableFilterValue) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id: string) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id: string) => {
      router.push(paths.dashboard.product.edit(id));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(paths.dashboard.product.details(id));
    },
    [router]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <>
    <MainLayout>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        {/* <CustomBreadcrumbs
          heading="List"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            {
              name: 'Product',
              href: paths.dashboard.product.root,
            },
            { name: 'List' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.product.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Product
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        /> */}
        <Typography variant='h3' sx={{ color: 'primary.dark', pb: 5 }}>
          Your Cart
        </Typography>

        <Card>
          <ProductTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            stockOptions={PRODUCT_STOCK_OPTIONS}
            publishOptions={PUBLISH_OPTIONS}
          />

          {canReset && (
            <ProductTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {productsStatus.loading ? (
                    [...Array(table.rowsPerPage)].map((i, index) => (
                      <TableSkeleton key={index} sx={{ height: denseHeight }} />
                    ))
                  ) : (
                    <>
                      {dataFiltered
                        .slice(
                          table.page * table.rowsPerPage,
                          table.page * table.rowsPerPage + table.rowsPerPage
                        )
                        .map((row) => (
                          <ProductTableRow
                            key={row.id}
                            row={row}
                            selected={table.selected.includes(row.id)}
                            onSelectRow={() => table.onSelectRow(row.id)}
                            onDeleteRow={() => handleDeleteRow(row.id)}
                            onEditRow={() => handleEditRow(row.id)}
                            onViewRow={() => handleViewRow(row.id)}
                          />
                        ))}
                    </>
                  )}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
        <Card 
          sx={{ 
            width: '380px',
            p: 2,
            mt: 5,
            borderRadius: '5%'
           }}
        >
          <Stack direction='column' spacing={1}>
            <Stack direction='row' spacing={27.5}>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                Subtotal:
              </Typography>
              <Typography variant='body2'>
                $1,091.99
              </Typography>
            </Stack>
            <Divider />
            <Stack direction='row' spacing={28}>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                Sales Tax:
              </Typography>
              <Typography variant='body2'>
                $102.00
              </Typography>
            </Stack>
            <Divider />
            <Stack direction='row' spacing={21.5}>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                Coupon Code:
              </Typography>
              <Link
                noWrap
                color="inherit"
                variant="subtitle2"
                // onClick={onViewRow}
                sx={{ cursor: 'pointer' }}
              >
                <Typography variant='body2'>
                  Add Coupon
                </Typography>
              </Link>
            </Stack>
            <Divider />
            <Stack direction='row' spacing={24}>
              <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                Grand Total:
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                $1,121.98
              </Typography>
            </Stack>
            <Button 
              variant='contained' 
              // onClick={previous} 
              sx={{ 
                borderTopRightRadius: '30px',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: 0,
                bgcolor: 'primary.main',
                // color: activeButton === 'prev' ? 'black' : 'default',
                width: '150px',
                height: '50px',
                alignContent: 'right',
                marginTop: '50px' 
              }}
            >
              Check out
            </Button>
          </Stack>
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />

    </MainLayout>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
  filters,
}: {
  inputData: IProduct[];
  comparator: (a: any, b: any) => number;
  filters: IProductTableFilters;
}) {
  const { name, stock, publish } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (product) => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (stock.length) {
    inputData = inputData.filter((product) => stock.includes(product.inventoryType));
  }

  if (publish.length) {
    inputData = inputData.filter((product) => publish.includes(product.publish));
  }

  return inputData;
}

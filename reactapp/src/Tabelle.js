import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TablePagination from '@mui/material/TablePagination';




import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Popper,ButtonGroup, TableFooter} from '@mui/material';
import TextField from '@mui/material/TextField';


import Row from './Row';
import { Autocomplete, Button } from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import usePrevious from './usePrevious';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

const marks = [
  {
    value: 0,
    label: '0€',
  },
  {
    value: 10,
    label: '10€',
  },
  {
    value: 7000,
    label: '7000€',
  }
];

const names = [
  'SDSU',
  'UC-Santa-Barbara',
  'Griffith-University',
  'Copenhagen-Business-School',
];
const countries = [
  'USA',
  'Australia',
  'Denmark'
]

const subject = [
  'BWL',
  'WI',
  'VWL'
]



export default function Tabelle() {


  // 👇 look here

  const [Uniname, setUniName] = React.useState(names);
  const [Namefilter, setFilter] = React.useState(names);
  const preValue = usePrevious(Namefilter)


  
  const [Country, setCountry] = React.useState(countries);
  const [Countryfilter, setCountryfilter] = React.useState(countries);

  const [Subject, setSubject] = React.useState(subject);
  const [Subjectfilter, setSubjectfilter] = React.useState(subject);

  function valuetext(value) {
    return `${value}°C`;
  }
  const checkedIcon = <CheckBoxIcon fontSize="small" />;


  const [groups, setGroups] = useState([
    {id: 1, name: 'SDSU', country: 'USA', subject: 'BWL', cost: 7000},
     {id: 2, name: 'UC-Santa-Barbara', country: 'USA', subject: 'BWL', cost: 7000},
     {id: 3, name: 'Griffith-University', country: 'Australia', subject: 'WI', cost: 5000},
     {id: 4, name: 'Copenhagen-Business-School', country: 'Denmark', subject: 'BWL', cost: 2000}
  ]);
  const [loading, setLoading] = useState(false);

 const [uniarray] = useState([
   {id: 1, name: 'SDSU', country: 'USA', subject: 'BWL', cost: 7000},
    {id: 2, name: 'UC-Santa-Barbara', country: 'USA', subject: 'BWL', cost: 7000},
    {id: 3, name: 'Griffith-University', country: 'Australia', subject: 'WI', cost: 5000},
    {id: 4, name: 'Copenhagen-Business-School', country: 'Denmark', subject: 'BWL', cost: 2000}
 ]);

 const [countriesarray] = useState([
  {country: 'USA'},
  {country: 'Australia'},
  {country: 'Denmark'}
]);

const [subjectarray] = useState([
  {subject: 'BWL'},
  {subject: 'WI'},
  {subject: 'VWL'}
]);


  
//Accordion
const [expanded, setExpanded] = React.useState(false);

const handleChangeAccordion = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};


 useEffect(() => {
  console.log('useEffect ran. value is: ', preValue);
}, [Namefilter]);

  const handleChange = (e,v) => {
      setFilter(v)
      console.log('v', v)
      console.log('df',preValue)
      }

  

    const filtered_universities = groups.filter(university => {
    return Namefilter.includes(university.name) && Countryfilter.includes(university.country) && Subjectfilter.includes(university.subject); 
    });

  const handleChangeCountry = (event, reason) => {
    const filters = reason.map(filter => filter['country'])
    setCountryfilter(filters)
  }


  const handleChangeSubject = (event, reason) => {
    const filters = reason.map(filter => filter['subject'])
    setSubjectfilter(filters)
  }

 
  
const handleClick = (e) => {
  setFilter(names);
}

const handleClickUniClear = (e) => {
  setFilter([]);
}


const handleClickAddCountries = (e) => {
  setCountryfilter(countries);
}

const handleClickClearCountries = (e) => {
  setCountryfilter([]);
}

const handleClickAddSubject = (e) => {
  setSubjectfilter(subject);

}

const handleClickClearSubject = (e) => {
  setSubjectfilter([]);
}



const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const [page, setPage] = React.useState(0);

const [rowsPerPage, setRowsPerPage] = React.useState(5);



const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
 

  

  
  // TODO fix filter
  // TODO DSGVO Daten erwähnen -> öffentlich zugänglich, auf Rechtesystem verzichten
  // TODO Dateigröße, Designentscheidung Datenverarbeitung im Frontend, Anzahl an Usern
  // 2 komplexere Filter
  // Lambda named
  // Explorativ testen -> 
  // User bisschen erklären



  return (
    <div>


{/* <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={Uniname}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={Uniname.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
            <h1 >  Now: {Namefilter}, before: {preValue} </h1>

      </FormControl> */}
      <Box sx={{ width: '100%' }}>
<Paper sx={{ width: '100%', mb: 2 }}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell />
            <TableCell> 

          <Button color="primary" onClick={handleClick} >
            Add All
          </Button>
          <Button color="primary" onClick={handleClickUniClear} >
             Clear All
          </Button>
            <Autocomplete
      multiple
      disablePortal
      limitTags={2}
      disableListWrap = 'true'
      id="checkboxes-tags-demo"
      options={Uniname}
      disableCloseOnSelect 
      value={Namefilter}
      onChange={handleChange}
      getOptionLabel={(option) => option}
      renderTags={(value, getTagProps) => {
      const numTags = value.length;
        return (
          <Typography variant="body1">
            {value
              .slice(0, 2)
              .map((option, _) => option)
              .join(", ")}
            {numTags > 2 && ` +${numTags - 2} more`}
          </Typography>
        );
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={Namefilter.includes(option)}

          />
          {option}
 
        </li>
      )}
      style={{ width: 350 }}
      renderInput={(params) => (
        <TextField {...params}  placeholder="University" />
      )}
    />
      </TableCell>
      <TableCell align="right">
      <Button color="primary" onClick={handleClickAddCountries} >
            Add All
          </Button>
          <Button color="primary" onClick={handleClickClearCountries} >
             Clear All
          </Button>
      <Autocomplete
      multiple
      disablePortal
      limitTags={2}
      disableListWrap = 'true'
      id="checkboxes-tags-demo"
      options={Country}
      value={Countryfilter}
      disableCloseOnSelect 
      getOptionLabel={(option) => option}
      onChange={(e,v) => setCountryfilter(v)}
      renderTags={(value, getTagProps) => {
      const numTags = value.length;
        return (
          <Typography variant="body1">
            {value
              .slice(0, 2)
              .map((option, _) => option)
              .join(", ")}

            {numTags > 2 && ` +${numTags - 2} more`}
          </Typography>
        );
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={Countryfilter.includes(option)}
          />
          {option}
        </li>
      )}
      style={{ width: 350 }}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Country" />
      )}
    />
            </TableCell>
            <TableCell align="right">
            <Button color="primary" onClick={handleClickAddSubject} >
            Add All
          </Button>
          <Button color="primary" onClick={handleClickClearSubject} >
             Clear All
          </Button>
            <Autocomplete
      multiple
      disablePortal
      limitTags={2}
      disableListWrap = 'true'
      id="checkboxes-tags-demo"
      options={Subject}
      disableCloseOnSelect 
      value={Subjectfilter}
      getOptionLabel={(option) => option }
      onChange={(e,v) => setSubjectfilter(v)}
      renderTags={(value, getTagProps) => {
      const numTags = value.length;
        return (
          <Typography variant="body1">
            {value
              .slice(0, 2)
              .map((option, _) => option)
              .join(", ")}

            {numTags > 2 && ` +${numTags - 2} more`}
          </Typography>
        );
      }}
      renderOption={(props, option) => (
        <li {...props}>

          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={Subjectfilter.includes(option)}
          />
          {option}
          
        </li>
        
      )}
      style={{ width: 350 }}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Subject" />
      )}
    />
            </TableCell>
            <TableCell align="right">
            Cost
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {filtered_universities.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    {/* <TablePagination
          rowsPerPageOptions={[1,2,3]}
          component="div"
          count={Uniname.length}
          rowsPerPage={2}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
             </Paper>
 </Box>
    </div>
  );
         }

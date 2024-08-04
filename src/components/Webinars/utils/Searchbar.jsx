import React from 'react';
import { TextField, MenuItem, Box, InputAdornment, Select, FormControl, InputLabel } from '@mui/material';
import { Search } from '@mui/icons-material';
import { FaChevronDown } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
      <TextField
        variant="outlined"
        placeholder="Search webinars..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mr: 2 }}
      />
      <FormControl variant="outlined">
        <InputLabel>Sort by</InputLabel>
        <Select
          label="Sort by"
          defaultValue=""
          startAdornment={
            <InputAdornment position="start">
              <FaChevronDown />
            </InputAdornment>
          }
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="duration">Duration</MenuItem>
          <MenuItem value="title">Title</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

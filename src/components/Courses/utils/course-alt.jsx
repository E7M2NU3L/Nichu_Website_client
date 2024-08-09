import {Link} from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardContent,
  Grid,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import BrushIcon from "@mui/icons-material/Brush";
import Cyber from '../../../assets/images/CyberSecurity.png'

export default function CourseAlt() {
  const [filterMenuAnchorEl, setFilterMenuAnchorEl] = useState(null);
  const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState(null);
  const [filter, setFilter] = useState({
    tech: true,
    webDevelopment: false,
    uiuxDesign: false,
  });
  const [sort, setSort] = useState("newest");

  const handleFilterMenuOpen = (event) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuAnchorEl(null);
  };

  const handleSortMenuOpen = (event) => {
    setSortMenuAnchorEl(event.currentTarget);
  };

  const handleSortMenuClose = () => {
    setSortMenuAnchorEl(null);
  };

  const handleFilterChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="flex min-h-screen w-full">
      <Hidden mdDown>
        <aside className="hidden w-64 flex-col border-r p-6 md:flex">
          <Typography variant="h6" gutterBottom>
            Course Categories
          </Typography>
          <List>
            <ListItem button component={Link} to="#">
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Tech" />
            </ListItem>
            <ListItem button component={Link} to="#">
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Web Development" />
            </ListItem>
            <ListItem button component={Link} to="#">
              <ListItemIcon>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="UI/UX Design" />
            </ListItem>
          </List>
        </aside>
      </Hidden>
      <div className="flex-1">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">Courses</Typography>
            <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
              <IconButton
                color="inherit"
                onClick={handleFilterMenuOpen}
                size="small"
              >
                <FilterListIcon />
                <span style={{ marginLeft: "4px" }}>Filter</span>
              </IconButton>
              <Menu
                anchorEl={filterMenuAnchorEl}
                open={Boolean(filterMenuAnchorEl)}
                onClose={handleFilterMenuClose}
              >
                <MenuItem disabled>Filter by</MenuItem>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter.tech}
                        onChange={handleFilterChange}
                        name="tech"
                      />
                    }
                    label="Tech"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter.webDevelopment}
                        onChange={handleFilterChange}
                        name="webDevelopment"
                      />
                    }
                    label="Web Development"
                  />
                </MenuItem>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter.uiuxDesign}
                        onChange={handleFilterChange}
                        name="uiuxDesign"
                      />
                    }
                    label="UI/UX Design"
                  />
                </MenuItem>
              </Menu>

              <IconButton
                color="inherit"
                onClick={handleSortMenuOpen}
                size="small"
              >
                <SortIcon />
                <span style={{ marginLeft: "4px" }}>Sort</span>
              </IconButton>
              <Menu
                anchorEl={sortMenuAnchorEl}
                open={Boolean(sortMenuAnchorEl)}
                onClose={handleSortMenuClose}
              >
                <MenuItem disabled>Sort by</MenuItem>
                <RadioGroup
                  value={sort}
                  onChange={handleSortChange}
                  name="sort"
                >
                  <MenuItem>
                    <FormControlLabel
                      value="newest"
                      control={<Radio />}
                      label="Newest"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      value="popular"
                      control={<Radio />}
                      label="Popular"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      value="price-asc"
                      control={<Radio />}
                      label="Price: Low to High"
                    />
                  </MenuItem>
                  <MenuItem>
                    <FormControlLabel
                      value="price-desc"
                      control={<Radio />}
                      label="Price: High to Low"
                    />
                  </MenuItem>
                </RadioGroup>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Course thumbnail"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Introduction to Web Development
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Learn the fundamentals of web development, including HTML,
                    CSS, and JavaScript.
                  </Typography>
                  <Button variant="contained" fullWidth style={{ marginTop: "16px" }}>
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Course thumbnail"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Advanced React.js
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Dive deep into React.js and learn advanced concepts like
                    hooks, context, and performance optimization.
                  </Typography>
                  <Button variant="contained" fullWidth style={{ marginTop: "16px" }}>
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Course thumbnail"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Figma for UI/UX Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Master the tools and techniques of Figma to create
                    professional-grade user interfaces and experiences.
                  </Typography>
                  <Button variant="contained" fullWidth style={{ marginTop: "16px" }}>
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Course thumbnail"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Machine Learning for Beginners
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Explore the fundamentals of machine learning and build your
                    first models using Python and popular libraries.
                  </Typography>
                  <Button variant="contained" fullWidth style={{ marginTop: "16px" }}>
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Course thumbnail"
                      width={300}
                      height={200}
                      style={{ borderRadius: "8px", objectFit: "cover" }}
                    />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Introduction to Python
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Get started with Python programming and learn the basics of
                    coding, data structures, and algorithms.
                  </Typography>
                  <Button variant="contained" fullWidth style={{ marginTop: "16px" }}>
                    Enroll
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

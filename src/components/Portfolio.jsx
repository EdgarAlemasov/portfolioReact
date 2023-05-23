import React, { Component } from "react";
import projects from "../projectsData";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


const allFilters = ["All", "Websites", "Flayers", "Business Cards"]
const selectedFilter = "All"

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFilter: selectedFilter,
            allFilters: allFilters
        }
        this.projects = projects
        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(filter) {
        this.setState((prev) => ({
            allFilters: allFilters,
            selectedFilter: filter,
        }));
    }

    render() {
        return (
            <div className="Portfolio">
                <Toolbar
                    filters={this.state.allFilters}
                    selected={this.state.selectedFilter}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList
                    projects={
                        this.state.selectedFilter === "All" ? this.projects : this.projects.filter(
                            (project) => project.category === this.state.selectedFilter
                        )
                    }
                />
            </div>
        );
    }
}
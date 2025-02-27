
/**
 * Represents the data store for the query system.
 * Data is structured as {<category_name>: <category_data>}
 */
export type DataStore = Record<string, DataCategory>;


/**
 * Represents a single category in the query system.
 */
export interface DataCategory {
    /** Name of the category */
    name: string;
    /** Short description of the category */
    short_desc: string;
    /** Keywords to search for this category */
    keywords: string[];
    /** List of items in this category */
    items: DataPoint[];
}

/**
 * Represents a single data point in the query system.
 */
interface DataPoint {
    /** Title of the item */
    title: string;
    /** Description of the item */
    description: string;
    /** What all steps to take to complete this item */
    steps?: Step[];
    /** The format or the names of the documents needed for this item*/
    docs_needed?: DocumentTemplate[];
    /** Any additional links for further references*/
    related_links?: string[];
}

/**
 * Represents a single step in the data point.
 */
interface Step {
    /** Title of the step */
    title: string;
    /** Description of the step */
    description: string;
    /** Who is responsible for this step or who should do this */
    responsible_authority: string;
    /** Expected time to complete this step */
    expected_time?: string;
}

/** Represents the document template or format for a data point */
interface DocumentTemplate {
    /** Type of the document */
    type: string;
    /** Template for the document */
    template: string;
    /** Fields to be filled in the template */
    fields: string[];
}

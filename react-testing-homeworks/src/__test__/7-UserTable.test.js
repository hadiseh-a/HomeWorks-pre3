import {render,screen} from "@testing-library/react"
import UserTable from "../components/7-UserTable/UserTable.jsx"
import "@testing-library/jest-dom"
import fetchMock from "jest-fetch-mock";
import data from "./data.json";
fetchMock.enableMocks();
describe('test UserTable component', () => {
    beforeEach(() => {
        fetch.resetMocks();
      });    
    test('tests The UserTable component correctly fetches and renders a table of users.', async() => { 
        fetch.mockResponseOnce(JSON.stringify(data));
        render(<UserTable/>)
        const dataUser=await screen.findAllByTestId("user-row")
        expect(dataUser).toHaveLength(2)
        expect(dataUser[0]).toHaveTextContent("ali")
        expect(dataUser[1]).toHaveTextContent("hassan")
     })
 })
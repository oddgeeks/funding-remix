import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { CTA } from "./index";

const TablePhaseOne = [
  {
    columnOne: "Profit Target",
    columnTwo: "8%",
    columnThree: "8%",
    columnFour: "8%",
    columnFive: "8%",
    columnSix: "8%",
    columnSeven: "8%",
  },
  {
    columnOne: "Minimum Trading Days",
    columnTwo: "1 day",
    columnThree: "1 day",
    columnFour: "1 day",
    columnFive: "1 day ",
    columnSix: "1 day",
    columnSeven: "1 day",
  },
  {
    columnOne: "Trading Period",
    columnTwo: "Unlimited",
    columnThree: "Unlimited",
    columnFour: "Unlimited",
    columnFive: "Unlimited ",
    columnSix: "Unlimited",
    columnSeven: "Unlimited",
  },
  {
    columnOne: "Max Daily Loss",
    columnTwo: "5%",
    columnThree: "5%",
    columnFour: "5%",
    columnFive: "5% ",
    columnSix: "5%",
    columnSeven: "5%",
  },
  {
    columnOne: "Max Initial Account Balance Loss",
    columnTwo: "8%",
    columnThree: "8%",
    columnFour: "8%",
    columnFive: "8% ",
    columnSix: "8%",
    columnSeven: "8%",
  },
];

const TableOneStep = [
  {
    name: "Profit Target",
    firstValue: "10%",
    columnThree: "10%",
    columnFour: "10%",
    columnFive: "10%",
    columnSix: "10%",
    columnSeven: "10%",
  },
  {
    name: "Minimum Trading Days",
    firstValue: "1 day",
    columnThree: "1 day",
    columnFour: "1 day",
    columnFive: "1 day ",
    columnSix: "1 day",
    columnSeven: "1 day",
  },
  {
    name: "Trading Period",
    firstValue: "Unlimited",
    columnThree: "Unlimited",
    columnFour: "Unlimited",
    columnFive: "Unlimited ",
    columnSix: "Unlimited",
    columnSeven: "Unlimited",
  },
  {
    name: "Max Daily Loss",
    firstValue: "4%",
    columnThree: "4%",
    columnFour: "4%",
    columnFive: "4% ",
    columnSix: "4%",
    columnSeven: "4%",
  },
  {
    name: "Max Trailing Loss",
    firstValue: "6%",
    columnThree: "6%",
    columnFour: "6%",
    columnFive: "6% ",
    columnSix: "6%",
    columnSeven: "6%",
  },
];

const TablePhaseTwo = [
  {
    name: "Profit Target",
    firstValue: "5%",
    columnThree: "5%",
    columnFour: "5% ",
    columnFive: "5%",
    columnSix: "5%",
    columnSeven: "5%",
  },
  {
    name: "Minimum Trading Days",
    firstValue: "1 day",
    columnThree: "1 day",
    columnFour: "1 day",
    columnFive: "1 day",
    columnSix: "1 day",
    columnSeven: "1 day",
  },
  {
    name: "Trading Period",
    firstValue: "Unlimited",
    columnThree: "Unlimited",
    columnFour: "Unlimited ",
    columnFive: "Unlimited ",
    columnSix: "Unlimited",
    columnSeven: "Unlimited",
  },
  {
    name: "Max Daily Loss",
    firstValue: "5%",
    columnThree: "5%",
    columnFour: "5%",
    columnFive: "5% ",
    columnSix: "5%",
    columnSeven: "5%",
  },
  {
    name: "Max Initial Account Balance Loss",
    firstValue: "8%",
    columnThree: "8%",
    columnFour: "8%",
    columnFive: "8%",
    columnSix: "8%",
    columnSeven: "8%",
  },
];
const TablePrice = [
  {
    name: "Available Leverage",
    firstValue: "100:1",
    columnThree: "100:1",
    columnFour: "100:1 ",
    columnFive: "100:1",
    columnSix: "100:1",
    columnSeven: "100:1",
  },
  {
    name: "Refundable Registration Fee",
    firstValue: "$50",
    columnThree: "$100",
    columnFour: "$200",
    columnFive: "$300",
    columnSix: "$500",
    columnSeven: "$950",
  },
];

export function Tables({ checked }: { checked: boolean }) {
  return (
    <>
      <div
        data-testid="mffx-selection"
        className="px-8 mx-auto max-w-screen-2xl"
      >
        {/* table Start */}
        <div className="pt-16 mt-8 shadow-2xl lg:container lg:mx-auto lg:px-5 bg-funded-700">
          <div className="container px-6 mx-auto lg:px-20 ">
            <div>
              <h2 className="text-4xl font-medium font-lexend">
                {!checked ? `Phase 1` : `1-Step`}
              </h2>
              <p className="pt-4 pb-10 text-xl text-gray-400 font-lexend ">
                Detailed Explanations of Trading Objectives{" "}
              </p>
            </div>
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none",
                background: "none",
                border: "none",
              }}
            >
              <Table
                sx={{ minWidth: 650, background: "none" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-sizeMedium ": {
                        fontSize: "19px",
                        borderLeft: "1px solid #2E2D2D",
                        borderBottom: "1px solid #2E2D2D",
                        textAlign: "center",
                        color: "#DBB66B",
                      },
                      ".MuiTableCell-sizeMedium:first-of-type": {
                        borderLeft: "none",
                      },
                    }}
                  >
                    <TableCell></TableCell>
                    <TableCell align="right">$5K</TableCell>
                    <TableCell align="right">$10K</TableCell>
                    <TableCell align="right">$25K</TableCell>
                    <TableCell align="right">$50K</TableCell>
                    <TableCell align="right">$100K</TableCell>
                    <TableCell align="right">$200K</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!checked &&
                    TablePhaseOne.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "th:first-of-type": {
                            textAlign: "left",
                            width: "25%",
                            color: "#FFE3AB",
                            borderBottom: "1px solid #2E2D2D",
                            borderRight: "1px solid #2E2D2D",
                          },
                          td: {
                            fontSize: "18px",
                            fontWeight: "500",
                            borderLeft: "1px solid #DCDCDC",
                            borderBottom: "1px solid #2E2D2D",
                            borderRight: "1px solid #2E2D2D",
                            color: "white",
                          },
                          "& .MuiTableCell-sizeMedium ": {
                            fontSize: "18px",
                            fontWeight: "500",
                            textAlign: "center",
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.columnOne}
                        </TableCell>
                        <TableCell align="right">{row.columnTwo}</TableCell>
                        <TableCell align="right">{row.columnThree}</TableCell>
                        <TableCell align="right">{row.columnFour}</TableCell>
                        <TableCell align="right">{row.columnFive}</TableCell>
                        <TableCell align="right">{row.columnSix} </TableCell>
                        <TableCell align="right">{row.columnSeven} </TableCell>
                      </TableRow>
                    ))}
                  {checked &&
                    TableOneStep.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "th:first-of-type": {
                            textAlign: "left",
                            width: "25%",
                            color: "#FFE3AB",
                            borderBottom: "1px solid #2E2D2D",
                            borderRight: "1px solid #2E2D2D",
                          },
                          td: {
                            fontSize: "18px",
                            fontWeight: "500",
                            borderLeft: "1px solid #DCDCDC",
                            borderBottom: "1px solid #2E2D2D",
                            borderRight: "1px solid #2E2D2D",
                            color: "white",
                          },
                          "& .MuiTableCell-sizeMedium ": {
                            fontSize: "18px",
                            fontWeight: "500",
                            textAlign: "center",
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.firstValue}</TableCell>
                        <TableCell align="right">{row.columnThree}</TableCell>
                        <TableCell align="right">{row.columnFour}</TableCell>
                        <TableCell align="right">{row.columnFive}</TableCell>
                        <TableCell align="right">{row.columnSix} </TableCell>
                        <TableCell align="right">{row.columnSeven} </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Second table */}

            <div className="my-16">
              {!checked && (
                <div>
                  <h2 className="text-4xl font-medium font-lexend ">Phase 2</h2>
                  <p className="pt-4 pb-10 text-xl text-gray-400 font-lexend">
                    Detailed Explanations of Trading Objectives{" "}
                  </p>
                </div>
              )}
              {!checked && (
                <TableContainer
                  component={Paper}
                  sx={{
                    boxShadow: "none  ",
                    background: "none",
                    border: "none",
                  }}
                >
                  <Table
                    sx={{ minWidth: 650, background: "none" }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow
                        sx={{
                          "& .MuiTableCell-sizeMedium ": {
                            fontSize: "19px",
                            borderLeft: "1px solid #2E2D2D",
                            borderBottom: "1px solid #2E2D2D",
                            color: "#DBB66B",
                            textAlign: "center",
                          },
                          ".MuiTableCell-sizeMedium:first-of-type": {
                            borderLeft: "none",
                          },
                        }}
                      >
                        <TableCell></TableCell>
                        <TableCell align="right">$5K</TableCell>
                        <TableCell align="right">$10K</TableCell>
                        <TableCell align="right">$25K</TableCell>
                        <TableCell align="right">$50K</TableCell>
                        <TableCell align="right">$100K</TableCell>
                        <TableCell align="right">$200K</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {TablePhaseTwo.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "th:first-of-type": {
                              textAlign: "left",
                              width: "25%",
                              color: "#FFE3AB",
                              borderBottom: "1px solid #2E2D2D",
                              borderRight: "1px solid #2E2D2D",
                            },
                            td: {
                              fontSize: "18px",
                              fontWeight: "500",
                              borderLeft: "1px solid #2E2D2D",
                              borderBottom: "1px solid #2E2D2D",
                              color: "white",
                            },
                            "& .MuiTableCell-sizeMedium ": {
                              fontSize: "18px",
                              fontWeight: "500",
                              textAlign: "center",
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.firstValue}</TableCell>
                          <TableCell align="right">{row.columnThree}</TableCell>
                          <TableCell align="right">{row.columnFour}</TableCell>
                          <TableCell align="right">{row.columnFive}</TableCell>
                          <TableCell align="right">{row.columnSix}</TableCell>
                          <TableCell align="right">{row.columnSeven}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
            {/* tablethree */}
            <TableContainer
              component={Paper}
              sx={{
                boxShadow: "none  ",
                border: "none",
                fontFamily: "font-Lexend",
                background: "none",
              }}
            >
              <Table
                sx={{ minWidth: 650, background: "none" }}
                aria-label="simple table"
              >
                <TableBody>
                  {TablePrice.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "th:first-of-type": {
                          textAlign: "left",
                          width: "25%",
                          color: "#FFE3AB",
                          borderBottom: "1px solid #2E2D2D",
                          borderRight: "1px solid #2E2D2D",
                        },
                        td: {
                          fontSize: "18px",
                          color: "white",
                          fontWeight: "500",
                          borderLeft: "1px solid #2E2D2D",
                          borderBottom: "1px solid #2E2D2D",
                        },
                        "& .MuiTableCell-sizeMedium ": {
                          fontSize: "18px",
                          fontWeight: "500",
                          textAlign: "center",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.firstValue}</TableCell>
                      <TableCell align="right">{row.columnThree}</TableCell>
                      <TableCell align="right">{row.columnFour}</TableCell>
                      <TableCell align="right">{row.columnFive}</TableCell>
                      <TableCell align="right">{row.columnSix}</TableCell>
                      <TableCell align="right">{row.columnSeven}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <CTA />
        </div>
      </div>
    </>
  );
}

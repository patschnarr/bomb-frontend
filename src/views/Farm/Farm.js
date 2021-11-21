import React from 'react';
import { useWallet } from 'use-wallet';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Bank from '../Bank';

import { Box, Container, Typography, Grid } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

import UnlockWallet from '../../components/UnlockWallet';
import Page from '../../components/Page';
import FarmCard from './FarmCard';
import FarmImage from '../../assets/img/farm.png';
import { createGlobalStyle } from 'styled-components';

import useBanks from '../../hooks/useBanks';

const BackgroundImage = createGlobalStyle`
  body {
    background: url(${FarmImage}) no-repeat !important;
    background-size: cover !important;
  }
`;

const Farm = () => {
  const [banks] = useBanks();
  const { path } = useRouteMatch();
  const { account } = useWallet();
  const activeBanks = banks.filter((bank) => !bank.finished);
  return (
    <Switch>
      <Page>
        <Route exact path={path}>
          <BackgroundImage />
          {!!account ? (
            <Container maxWidth="lg">
              <Typography color="textPrimary" align="center" variant="h3" gutterBottom>
                Farm
              </Typography>

              <Box mt={5}>
                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 2).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom>
                    Earn BSHARE by staking LP
                  </Typography>
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 2)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 1).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                    Earn BOMB by staking LP
                  </Typography>
                  <Alert variant="filled" severity="warning">
                    Below pools are in full effect until the system starts December 1st.
                  </Alert>
                  <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 1)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>

                <div hidden={activeBanks.filter((bank) => bank.sectionInUI === 0).length === 0}>
                  <Typography color="textPrimary" variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                    Genesis Pools
                  </Typography>
                  <Grid container spacing={3}>
                    {activeBanks
                      .filter((bank) => bank.sectionInUI === 0)
                      .map((bank) => (
                        <React.Fragment key={bank.name}>
                          <FarmCard bank={bank} />
                        </React.Fragment>
                      ))}
                  </Grid>
                </div>
              </Box>
            </Container>
          ) : (
            <UnlockWallet />
          )}
        </Route>
        <Route path={`${path}/:bankId`}>
          <BackgroundImage />
          <Bank />
        </Route>
      </Page>
    </Switch>
  );
};

export default Farm;

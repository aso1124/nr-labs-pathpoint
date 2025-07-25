import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { QueryTree, Signal } from '../';
import {
  MODES,
  OK_STATUSES,
  SIGNAL_EXPAND,
  UNHEALTHY_STATUSES,
} from '../../constants';

const SignalsList = memo(
  ({
    signals,
    queries,
    mode,
    signalExpandOption,
    hideHealthy,
    signalDisplayName,
    openDeleteModalHandler,
  }) => {
    if (mode === MODES.EDIT) {
      return (
        <>
          {signals.map(({ guid, name, status, type }) => (
            <Signal
              key={guid}
              guid={guid}
              type={type}
              name={signalDisplayName({ name, guid })}
              onDelete={() => openDeleteModalHandler(guid, name)}
              status={status}
              mode={mode}
            />
          ))}
          {queries.map(({ id, query, results }) => (
            <QueryTree query={query} results={results} key={id} />
          ))}
        </>
      );
    }

    if (signalExpandOption === SIGNAL_EXPAND.ALL) {
      return signals.map(({ guid, name, status, type }) => {
        return (
          <Signal
            key={guid}
            guid={guid}
            type={type}
            name={signalDisplayName({ name, guid })}
            onDelete={() => openDeleteModalHandler(guid, name)}
            status={status}
            mode={mode}
          />
        );
      });
    }

    const filteredSignals =
      !hideHealthy ||
      !signals.some(({ status }) => UNHEALTHY_STATUSES.includes(status))
        ? signals
        : signals.filter(({ status }) => !OK_STATUSES.includes(status));

    return filteredSignals.map(({ guid, name, status, type }) => {
      return (
        <Signal
          key={guid}
          guid={guid}
          type={type}
          name={signalDisplayName({ name, guid })}
          onDelete={() => openDeleteModalHandler(guid, name)}
          status={status}
          mode={mode}
        />
      );
    });
  }
);
SignalsList.displayName = 'SignalsList';

SignalsList.propTypes = {
  signals: PropTypes.array,
  queries: PropTypes.array,
  mode: PropTypes.oneOf(Object.values(MODES)),
  signalExpandOption: PropTypes.number,
  hideHealthy: PropTypes.bool,
  signalDisplayName: PropTypes.func,
  openDeleteModalHandler: PropTypes.func,
};

export default SignalsList;

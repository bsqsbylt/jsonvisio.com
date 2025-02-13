import SplitPane from "react-split-pane";
import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
`;

export const StyledEditorWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 568px) {
    display: none;
  }
`;

export const StyledTools = styled.div`
  display: flex;
  align-items: center;
  height: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.BLACK};
  padding: 4px 16px;
  background: ${({ theme }) => theme.BLACK_SECONDARY};
  color: ${({ theme }) => theme.SILVER};
`;

export const StyledEditor = styled(SplitPane)`
  position: relative !important;
  display: flex;
  background: ${({ theme }) => theme.BLACK_LIGHT};
  height: calc(100vh - 26px) !important;

  .Resizer {
    background: #000;
    opacity: 0.2;
    box-sizing: border-box;
    background-clip: padding-box;
    z-index: 1;
  }

  .Resizer:hover {
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 16px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
    z-index: 0 !important;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;

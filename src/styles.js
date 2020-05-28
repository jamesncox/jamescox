
import styled from 'styled-components';
import { blue, gray } from '@carbon/colors';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.50rem;
  margin-bottom: 0.50rem;
  padding: 0.5rem 1rem;
  background-color: ${gray[10]};
  color: ${blue[70]};
  border: 1px solid ${blue[20]};
  border-radius: 2px;
  // font-weight: bold;
`;
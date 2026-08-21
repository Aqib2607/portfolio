import { diagramColors as C } from "./diagramTokens";

// Reusable Box Primitive
function Box({
  x,
  y,
  w,
  h,
  label,
  sublabel,
  color = C.nodeBorder,
  fill = C.node
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sublabel?: string;
  color?: string;
  fill?: string;
}) {
  return (
    <g className="cursor-default transition-transform duration-300 hover:-translate-y-0.5">
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={fill}
        stroke={color}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - (sublabel ? 8 : 0)}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={C.text}
        fontSize={12}
        fontFamily={C.font}
        fontWeight={600}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={C.textMuted}
          fontSize={10}
          fontFamily={C.font}
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

// Reusable Arrow with optional animated dash
function Arrow({
  x1,
  y1,
  x2,
  y2,
  label
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g>
      <defs>
        <marker
          id="arrowhead-std"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill={C.arrow} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={C.arrow}
        strokeWidth={1.5}
        markerEnd="url(#arrowhead-std)"
        strokeDasharray="4 3"
      />
      {label && (
        <text
          x={mx}
          y={my - 6}
          textAnchor="middle"
          fill={C.arrowLabel}
          fontSize={9}
          fontFamily={C.font}
        >
          {label}
        </text>
      )}
    </g>
  );
}

// 1. Reqs.ai System Architecture Diagram
export function ReqsAiArchitecture() {
  return (
    <svg
      viewBox="0 0 760 380"
      width="100%"
      role="img"
      aria-label="Reqs.ai system architecture: React and TypeScript client sending REST API requests to a Laravel backend, which orchestrates AI document generation and persists project records in a MySQL database."
      style={{ maxWidth: "100%", borderRadius: 12, background: C.bg }}
    >
      {/* Title */}
      <text
        x={380}
        y={28}
        textAnchor="middle"
        fill={C.nodePrimary}
        fontSize={14}
        fontFamily={C.font}
        fontWeight={700}
      >
        Reqs.ai — System Architecture
      </text>

      {/* Layer 1: Client UI */}
      <rect x={40} y={60} width={680} height={70} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={80} fill={C.nodePrimary} fontSize={11} fontFamily={C.font} fontWeight={600}>FRONTEND PRESENTATION LAYER</text>
      <Box x={60} y={90} w={190} h={32} label="React + TypeScript SPA" sublabel="Dashboard & Editor" color={C.nodePrimary} fill="#1a1500" />
      <Box x={280} y={90} w={190} h={32} label="Document Workspace" sublabel="PRD & Specs State" color={C.nodePrimary} fill="#1a1500" />
      <Box x={500} y={90} w={200} h={32} label="Auth & Session Context" sublabel="JWT / Token Storage" color={C.nodePrimary} fill="#1a1500" />

      {/* Connection Layer 1 -> Layer 2 */}
      <Arrow x1={380} y1={130} x2={380} y2={180} label="REST API (JSON / HTTPS)" />

      {/* Layer 2: Laravel Backend */}
      <rect x={40} y={180} width={680} height={70} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={200} fill={C.nodeSecondary} fontSize={11} fontFamily={C.font} fontWeight={600}>APPLICATION & API LAYER (LARAVEL / PHP)</text>
      <Box x={60} y={210} w={190} h={32} label="API Router & Auth Guard" sublabel="Sanctum Middleware" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={280} y={210} w={190} h={32} label="Document Controller" sublabel="Version Management" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={500} y={210} w={200} h={32} label="AI Prompt Pipeline" sublabel="Modular Generation" color={C.nodeSecondary} fill="#0d1f0d" />

      {/* Connection Layer 2 -> Layer 3 */}
      <Arrow x1={200} y1={250} x2={200} y2={300} label="Eloquent ORM" />
      <Arrow x1={580} y1={250} x2={580} y2={300} label="API Request" />

      {/* Layer 3: Persistence & AI Engine */}
      <rect x={40} y={300} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={320} fill={C.nodeAccent} fontSize={11} fontFamily={C.font} fontWeight={600}>DATA PERSISTENCE & EXTERNAL SERVICES</text>
      <Box x={60} y={325} w={300} h={30} label="MySQL Relational Database" sublabel="Users, Workspaces, Version Snapshots" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={400} y={325} w={300} h={30} label="AI Generation Engine" sublabel="PRD, Architecture & Technical Specs" color={C.nodeAccent} fill="#0f1a0f" />
    </svg>
  );
}

// 2. Clinexa HMS Architecture Diagram
export function ClinexaArchitecture() {
  return (
    <svg
      viewBox="0 0 760 380"
      width="100%"
      role="img"
      aria-label="Clinexa Hospital Management System architecture: React frontend with domain modules connecting to a modular Laravel REST backend and normalized MySQL database."
      style={{ maxWidth: "100%", borderRadius: 12, background: C.bg }}
    >
      {/* Title */}
      <text
        x={380}
        y={28}
        textAnchor="middle"
        fill={C.nodePrimary}
        fontSize={14}
        fontFamily={C.font}
        fontWeight={700}
      >
        Clinexa HMS — System Architecture
      </text>

      {/* Layer 1: Frontend Modules */}
      <rect x={40} y={60} width={680} height={70} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={80} fill={C.nodePrimary} fontSize={11} fontFamily={C.font} fontWeight={600}>HEALTHCARE FRONTEND (REACT / TYPESCRIPT)</text>
      <Box x={60} y={90} w={150} h={32} label="Patient Management" sublabel="Admissions & Appointments" color={C.nodePrimary} fill="#1a1500" />
      <Box x={230} y={90} w={150} h={32} label="Billing & Invoicing" sublabel="Ledger & Receipts" color={C.nodePrimary} fill="#1a1500" />
      <Box x={400} y={90} w={150} h={32} label="Pharmacy Stock" sublabel="Medication Inventory" color={C.nodePrimary} fill="#1a1500" />
      <Box x={570} y={90} w={130} h={32} label="Laboratory" sublabel="Test Results" color={C.nodePrimary} fill="#1a1500" />

      {/* Connection */}
      <Arrow x1={380} y1={130} x2={380} y2={180} label="RESTful API Endpoints" />

      {/* Layer 2: Laravel Application */}
      <rect x={40} y={180} width={680} height={70} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={200} fill={C.nodeSecondary} fontSize={11} fontFamily={C.font} fontWeight={600}>MODULAR LARAVEL BACKEND CONTROLLERS</text>
      <Box x={60} y={210} w={150} h={32} label="Patient Controller" sublabel="Validation & Records" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={230} y={210} w={150} h={32} label="Billing Engine" sublabel="Invoice Generation" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={400} y={210} w={150} h={32} label="Inventory Service" sublabel="Stock Operations" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={570} y={210} w={130} h={32} label="Lab Controller" sublabel="Diagnostic Reports" color={C.nodeSecondary} fill="#0d1f0d" />

      {/* Connection */}
      <Arrow x1={380} y1={250} x2={380} y2={300} label="Eloquent Relational Queries" />

      {/* Layer 3: MySQL Relational Schema */}
      <rect x={40} y={300} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={320} fill={C.nodeAccent} fontSize={11} fontFamily={C.font} fontWeight={600}>RELATIONAL DATABASE SCHEMA (MYSQL)</text>
      <Box x={60} y={325} w={190} h={30} label="Patients & Doctors" sublabel="Core Entities" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={280} y={325} w={190} h={30} label="Appointments & Invoices" sublabel="Transactional Records" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={500} y={325} w={200} h={30} label="Pharmacy & Lab Tests" sublabel="Inventory & Results" color={C.nodeAccent} fill="#0f1a0f" />
    </svg>
  );
}

// 3. Restaurant Management System Architecture Diagram
export function RestaurantManagementArchitecture() {
  return (
    <svg
      viewBox="0 0 760 360"
      width="100%"
      role="img"
      aria-label="Restaurant Management System architecture: React ordering interface to Laravel MVC controllers and MySQL database."
      style={{ maxWidth: "100%", borderRadius: 12, background: C.bg }}
    >
      <text
        x={380}
        y={28}
        textAnchor="middle"
        fill={C.nodePrimary}
        fontSize={14}
        fontFamily={C.font}
        fontWeight={700}
      >
        Restaurant Management — MVC Architecture
      </text>

      {/* Frontend */}
      <rect x={40} y={60} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={80} fill={C.nodePrimary} fontSize={11} fontFamily={C.font} fontWeight={600}>FRONTEND INTERFACE (REACT / TYPESCRIPT)</text>
      <Box x={60} y={85} w={200} h={30} label="Menu Catalog View" sublabel="Category Filtering" color={C.nodePrimary} fill="#1a1500" />
      <Box x={280} y={85} w={200} h={30} label="Order Capture Interface" sublabel="Active Table Orders" color={C.nodePrimary} fill="#1a1500" />
      <Box x={500} y={85} w={200} h={30} label="Inventory & Billing View" sublabel="Receipt Calculation" color={C.nodePrimary} fill="#1a1500" />

      <Arrow x1={380} y1={120} x2={380} y2={170} label="REST API Communication" />

      {/* Backend MVC */}
      <rect x={40} y={170} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={190} fill={C.nodeSecondary} fontSize={11} fontFamily={C.font} fontWeight={600}>LARAVEL MVC APPLICATION BACKEND</text>
      <Box x={60} y={195} w={200} h={30} label="Menu Controller" sublabel="Item & Price Validation" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={280} y={195} w={200} h={30} label="Order Processing Controller" sublabel="Atomic Order Creation" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={500} y={195} w={200} h={30} label="Inventory Controller" sublabel="Stock Deduction" color={C.nodeSecondary} fill="#0d1f0d" />

      <Arrow x1={380} y1={230} x2={380} y2={280} label="Database Transactions" />

      {/* Database */}
      <rect x={40} y={280} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={300} fill={C.nodeAccent} fontSize={11} fontFamily={C.font} fontWeight={600}>RELATIONAL DATABASE (MYSQL)</text>
      <Box x={60} y={305} w={300} h={30} label="Menu Categories & Items" sublabel="Pricing & Attributes" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={400} y={305} w={300} h={30} label="Orders & Inventory Tables" sublabel="Order Items & Stock Levels" color={C.nodeAccent} fill="#0f1a0f" />
    </svg>
  );
}

// 4. Virtual CPU Emulator Architecture Diagram
export function VirtualCpuArchitecture() {
  return (
    <svg
      viewBox="0 0 760 360"
      width="100%"
      role="img"
      aria-label="Virtual CPU Emulator architecture: Instruction stream to instruction decoder, ALU operations, and internal register/memory state."
      style={{ maxWidth: "100%", borderRadius: 12, background: C.bg }}
    >
      <text
        x={380}
        y={28}
        textAnchor="middle"
        fill={C.nodePrimary}
        fontSize={14}
        fontFamily={C.font}
        fontWeight={700}
      >
        Virtual CPU Emulator — Architecture & Pipeline
      </text>

      {/* Input Stream */}
      <rect x={40} y={60} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={80} fill={C.nodePrimary} fontSize={11} fontFamily={C.font} fontWeight={600}>PROGRAM INSTRUCTION INPUT</text>
      <Box x={60} y={85} w={300} h={30} label="Opcode & Operand Stream" sublabel="Machine Instruction Bytes" color={C.nodePrimary} fill="#1a1500" />
      <Box x={400} y={85} w={300} h={30} label="Program Counter (PC)" sublabel="Next Instruction Address" color={C.nodePrimary} fill="#1a1500" />

      <Arrow x1={380} y1={120} x2={380} y2={170} label="Fetch & Decode Cycle" />

      {/* Control Unit & Decoder */}
      <rect x={40} y={170} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={190} fill={C.nodeSecondary} fontSize={11} fontFamily={C.font} fontWeight={600}>CONTROL UNIT & DECODER</text>
      <Box x={60} y={195} w={300} h={30} label="Instruction Decoder" sublabel="Opcode Interpretation" color={C.nodeSecondary} fill="#0d1f0d" />
      <Box x={400} y={195} w={300} h={30} label="Execution Controller" sublabel="ALU & Bus Sequencing" color={C.nodeSecondary} fill="#0d1f0d" />

      <Arrow x1={380} y1={230} x2={380} y2={280} label="Execute & State Update" />

      {/* Execution Units */}
      <rect x={40} y={280} width={680} height={60} rx={10} fill={C.groupBg} stroke={C.groupBorder} strokeWidth={1} />
      <text x={55} y={300} fill={C.nodeAccent} fontSize={11} fontFamily={C.font} fontWeight={600}>ALU & CPU STATE REGISTERS</text>
      <Box x={60} y={305} w={200} h={30} label="Arithmetic Logic Unit (ALU)" sublabel="Math & Logic Operations" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={280} y={305} w={200} h={30} label="General Purpose Registers" sublabel="Accumulator & Data Registers" color={C.nodeAccent} fill="#0f1a0f" />
      <Box x={500} y={305} w={200} h={30} label="Simulated RAM Memory Block" sublabel="Addressable Memory State" color={C.nodeAccent} fill="#0f1a0f" />
    </svg>
  );
}

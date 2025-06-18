// export interface Template {
//   id: string;
//   name: string;
//   description: string;
//   cssFile: string;
//   thumbnail?: string;
// }

// export const AVAILABLE_TEMPLATES: Template[] = [
//   {
//     id: 'modern-dark',
//     name: 'Modern Dark',
//     description: 'Sleek dark theme with blue accents',
//     cssFile: 'modern-dark.css',
//   },
//   {
//     id: 'corporate-blue',
//     name: 'Corporate Blue',
//     description: 'Professional blue corporate theme',
//     cssFile: 'corporate-blue.css',
//   },
//   {
//     id: 'minimalist',
//     name: 'Minimalist',
//     description: 'Clean and minimal design',
//     cssFile: 'minimalist.css',
//   },
//   {
//     id: 'gradient-purple',
//     name: 'Gradient Purple',
//     description: 'Modern gradient design with purple tones',
//     cssFile: 'gradient-purple.css',
//   },
//   {
//     id: 'nature-green',
//     name: 'Nature Green',
//     description: 'Eco-friendly green theme',
//     cssFile: 'nature-green.css',
//   },
// ];
















export interface TemplateStyles {
  slideContent: React.CSSProperties;
  slideTitle: React.CSSProperties;
  slideSubtitle: React.CSSProperties;
  slideList: React.CSSProperties;
  slideTable: React.CSSProperties;
  slideTableTh: React.CSSProperties;
  slideTableTd: React.CSSProperties;
  slideQuote: React.CSSProperties;
  slideDescription: React.CSSProperties;
  slideHighlight: React.CSSProperties;
  slideStats: React.CSSProperties;
  slideKeypoint: React.CSSProperties;
  slideImage: React.CSSProperties;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  styles: TemplateStyles;
  backgroundClass?: string;
}

export const AVAILABLE_TEMPLATES: Template[] = [
  {
    id: 'modern-dark',
    name: 'Modern Dark',
    description: 'Sleek dark theme with blue accents',
    backgroundClass: 'bg-gradient-to-br from-slate-900 to-slate-800',
    styles: {
      slideContent: {
        padding: '2rem',
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      slideTitle: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#3b82f6',
        marginBottom: '1rem',
        textAlign: 'center',
      },
      slideSubtitle: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#94a3b8',
        marginBottom: '2rem',
        textAlign: 'center',
      },
      slideList: {
        fontSize: '1.2rem',
        lineHeight: 1.8,
        margin: '1.5rem 0',
        paddingLeft: '2rem',
        color: '#e2e8f0',
      },
      slideTable: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '2rem 0',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        overflow: 'hidden',
      },
      slideTableTh: {
        background: '#3b82f6',
        color: 'white',
        padding: '1rem',
        textAlign: 'left',
        fontWeight: 600,
      },
      slideTableTd: {
        padding: '0.8rem 1rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#e2e8f0',
      },
      slideQuote: {
        fontSize: '1.8rem',
        fontStyle: 'italic',
        color: '#3b82f6',
        textAlign: 'center',
        margin: '2rem 0',
        padding: '1.5rem',
        borderLeft: '4px solid #3b82f6',
        background: 'rgba(59, 130, 246, 0.1)',
      },
      slideDescription: {
        color: '#94a3b8',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        textAlign: 'center',
        marginTop: '1rem',
      },
      slideHighlight: {
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        margin: '1.5rem 0',
        textAlign: 'center',
      },
      slideStats: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2rem 0',
      },
      slideKeypoint: {
        textAlign: 'center',
        padding: '1rem',
      },
      slideImage: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        margin: '1rem auto',
        display: 'block',
      },
    },
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    description: 'Professional blue corporate theme',
    backgroundClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    styles: {
      slideContent: {
        padding: '3rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        color: '#1e293b',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      slideTitle: {
        fontSize: '2.8rem',
        fontWeight: 700,
        color: '#1e40af',
        marginBottom: '1rem',
        textAlign: 'center',
        borderBottom: '3px solid #3b82f6',
        paddingBottom: '1rem',
      },
      slideSubtitle: {
        fontSize: '1.6rem',
        fontWeight: 500,
        color: '#475569',
        marginBottom: '2rem',
        textAlign: 'center',
      },
      slideList: {
        fontSize: '1.2rem',
        lineHeight: 1.8,
        margin: '1.5rem 0',
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      slideTable: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '2rem 0',
        background: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      slideTableTh: {
        background: '#1e40af',
        color: 'white',
        padding: '1.2rem',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.1rem',
      },
      slideTableTd: {
        padding: '1rem 1.2rem',
        borderBottom: '1px solid #e2e8f0',
        color: '#334155',
      },
      slideQuote: {
        fontSize: '1.8rem',
        fontStyle: 'italic',
        color: '#1e40af',
        textAlign: 'center',
        margin: '2rem 0',
        padding: '2rem',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderLeft: '6px solid #3b82f6',
      },
      slideDescription: {
        color: '#64748b',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        textAlign: 'center',
        marginTop: '1rem',
      },
      slideHighlight: {
        background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        margin: '1.5rem 0',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
      },
      slideStats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        margin: '2rem 0',
      },
      slideKeypoint: {
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      slideImage: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '12px',
        margin: '1rem auto',
        display: 'block',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean and minimal design',
    backgroundClass: 'bg-white',
    styles: {
      slideContent: {
        padding: '4rem',
        background: '#ffffff',
        color: '#2d3748',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      slideTitle: {
        fontSize: '3rem',
        fontWeight: 300,
        color: '#2d3748',
        marginBottom: '1rem',
        textAlign: 'center',
        letterSpacing: '-0.02em',
      },
      slideSubtitle: {
        fontSize: '1.4rem',
        fontWeight: 400,
        color: '#718096',
        marginBottom: '3rem',
        textAlign: 'center',
      },
      slideList: {
        fontSize: '1.2rem',
        lineHeight: 2,
        margin: '2rem 0',
        listStyle: 'none',
        padding: 0,
      },
      slideTable: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '3rem 0',
        fontSize: '1rem',
      },
      slideTableTh: {
        background: 'none',
        color: '#2d3748',
        padding: '1rem 0',
        textAlign: 'left',
        fontWeight: 600,
        borderBottom: '2px solid #e2e8f0',
      },
      slideTableTd: {
        padding: '1rem 0',
        borderBottom: '1px solid #f7fafc',
        color: '#4a5568',
      },
      slideQuote: {
        fontSize: '2rem',
        fontWeight: 300,
        color: '#2d3748',
        textAlign: 'center',
        margin: '3rem 0',
        padding: 0,
        border: 'none',
        background: 'none',
        fontStyle: 'normal',
        lineHeight: 1.4,
      },
      slideDescription: {
        color: '#718096',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        textAlign: 'center',
        marginTop: '2rem',
      },
      slideHighlight: {
        background: '#f7fafc',
        color: '#2d3748',
        padding: '2rem',
        margin: '2rem 0',
        textAlign: 'center',
        borderLeft: '4px solid #4299e1',
      },
      slideStats: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3rem 0',
      },
      slideKeypoint: {
        textAlign: 'center',
        padding: '1rem',
      },
      slideImage: {
        maxWidth: '100%',
        height: 'auto',
        margin: '2rem auto',
        display: 'block',
      },
    },
  },
  {
    id: 'gradient-purple',
    name: 'Gradient Purple',
    description: 'Modern gradient design with purple tones',
    backgroundClass: 'bg-gradient-to-br from-purple-600 to-purple-800',
    styles: {
      slideContent: {
        padding: '3rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      slideTitle: {
        fontSize: '2.8rem',
        fontWeight: 700,
        color: '#ffffff',
        marginBottom: '1rem',
        textAlign: 'center',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      slideSubtitle: {
        fontSize: '1.6rem',
        fontWeight: 500,
        color: '#e2e8f0',
        marginBottom: '2rem',
        textAlign: 'center',
      },
      slideList: {
        fontSize: '1.2rem',
        lineHeight: 1.8,
        margin: '1.5rem 0',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
      slideTable: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '2rem 0',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
      slideTableTh: {
        background: 'rgba(168, 85, 247, 0.8)',
        color: 'white',
        padding: '1.2rem',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.1rem',
      },
      slideTableTd: {
        padding: '1rem 1.2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#f1f5f9',
      },
      slideQuote: {
        fontSize: '1.8rem',
        fontStyle: 'italic',
        color: '#ffffff',
        textAlign: 'center',
        margin: '2rem 0',
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderLeft: '6px solid #a855f7',
      },
      slideDescription: {
        color: '#e2e8f0',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        textAlign: 'center',
        marginTop: '1rem',
      },
      slideHighlight: {
        background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        margin: '1.5rem 0',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(168, 85, 247, 0.3)',
      },
      slideStats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        margin: '2rem 0',
      },
      slideKeypoint: {
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      },
      slideImage: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '12px',
        margin: '1rem auto',
        display: 'block',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  {
    id: 'nature-green',
    name: 'Nature Green',
    description: 'Eco-friendly green theme',
    backgroundClass: 'bg-gradient-to-br from-green-50 to-green-100',
    styles: {
      slideContent: {
        padding: '3rem',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        color: '#1f2937',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
      slideTitle: {
        fontSize: '2.8rem',
        fontWeight: 700,
        color: '#166534',
        marginBottom: '1rem',
        textAlign: 'center',
      },
      slideSubtitle: {
        fontSize: '1.6rem',
        fontWeight: 500,
        color: '#374151',
        marginBottom: '2rem',
        textAlign: 'center',
      },
      slideList: {
        fontSize: '1.2rem',
        lineHeight: 1.8,
        margin: '1.5rem 0',
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        borderLeft: '4px solid #22c55e',
      },
      slideTable: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '2rem 0',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      slideTableTh: {
        background: '#22c55e',
        color: 'white',
        padding: '1.2rem',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.1rem',
      },
      slideTableTd: {
        padding: '1rem 1.2rem',
        borderBottom: '1px solid #f3f4f6',
        color: '#374151',
      },
      slideQuote: {
        fontSize: '1.8rem',
        fontStyle: 'italic',
        color: '#166534',
        textAlign: 'center',
        margin: '2rem 0',
        padding: '2rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        borderLeft: '6px solid #22c55e',
      },
      slideDescription: {
        color: '#6b7280',
        fontSize: '1.1rem',
        lineHeight: 1.6,
        textAlign: 'center',
        marginTop: '1rem',
      },
      slideHighlight: {
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        margin: '1.5rem 0',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(34, 197, 94, 0.3)',
      },
      slideStats: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        margin: '2rem 0',
      },
      slideKeypoint: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '2px solid #dcfce7',
      },
      slideImage: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '12px',
        margin: '1rem auto',
        display: 'block',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
    },
  },
];
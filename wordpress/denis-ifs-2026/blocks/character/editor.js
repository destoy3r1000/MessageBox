/* Editor UI for the "Part character" block: a dropdown and a size slider. No build step needed. */
( function ( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var InspectorControls = wp.blockEditor.InspectorControls;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var PanelBody = wp.components.PanelBody;
	var SelectControl = wp.components.SelectControl;
	var RangeControl = wp.components.RangeControl;
	var chars = window.DenisCharacters;

	wp.blocks.registerBlockType( 'denis/character', {
		edit: function ( props ) {
			var a = props.attributes;
			var ref = wp.element.useRef();
			var blockProps = useBlockProps( { className: 'chr', style: { width: a.size + 'px' }, ref: ref } );
			// Make sure the shared SVG filters exist inside the editor canvas (it is an iframe).
			wp.element.useEffect( function () {
				if ( ref.current && chars ) { chars.ensureDefs( ref.current.ownerDocument ); }
			} );
			return el(
				wp.element.Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Character', 'denis-ifs-2026' ) },
						el( SelectControl, {
							label: __( 'Which part', 'denis-ifs-2026' ),
							value: a.character,
							options: chars ? chars.list : [],
							onChange: function ( v ) { props.setAttributes( { character: v } ); },
						} ),
						el( RangeControl, {
							label: __( 'Size (pixels)', 'denis-ifs-2026' ),
							value: a.size,
							min: 40,
							max: 260,
							onChange: function ( v ) { props.setAttributes( { size: v } ); },
						} )
					)
				),
				el( 'span', Object.assign( {}, blockProps, {
					dangerouslySetInnerHTML: { __html: chars ? chars.svg( a.character ) : '' },
				} ) )
			);
		},
		save: function () { return null; },
	} );
} )( window.wp );

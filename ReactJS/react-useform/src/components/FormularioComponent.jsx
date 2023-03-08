import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Validators } from './Validator';

const FormularioComponent = () => {

	const { register, formState: { errors }, watch, handleSubmit } = useForm({
		defaultValues: {
			nombre: 'Luis',
			direccion: 'Calle El Rincón Escondido'
		}
	});

	const onSubmit = data => {
		console.debug(data)
	}

	// some watches
	const incluirTelFlag = watch('incluirTelefono', false); // <-- default value 'false'
	const watchAllFields = watch(); // <-- when pass nothing as argument, you are watching everything
	const watchFields = watch(['incluirTelefono', 'edad', 'telefono']); // you can also target specific fields by their names

	useEffect(() => {
		console.debug('watch(undefined)');
		watch((data, { name, type }) => console.log(data, name, type));
	}, [watchAllFields]);

	return (
		<div>
			<h3>Formulario</h3>
			<div className='form-fields'>
				<p>Nombre: { watch('nombre') }</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>Nombre</label>&nbsp;&nbsp;
						<input type="text" { ...register('nombre', {
							required: true,
							maxLength: 10
						})} />
						{errors.nombre?.type === 'required' && <span className="err-msg"><code>Campo nombre es requerido</code></span>}
						{errors.nombre?.type === 'maxLength' && <span className="err-msg"><code>Campo debe tener 10 caracteres como mínimo</code></span>}
					</div>
					<div>
						<label>Correo</label>&nbsp;&nbsp;
						<input type="text" {...register('correo', {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
						})} />
						{errors.correo?.type === 'required' && <span className="err-msg"><code>Campo correo es requerido</code></span>}
						{errors.correo?.type === 'pattern' && <span className="err-msg"><code>El formato del correo es incorrecto</code></span>}
					</div>
					<div>
						<label>Dirección</label>&nbsp;&nbsp;
						<input type="text" {...register('direccion', {
							required: true
						})} />
						{errors.direccion?.type === 'required' && <span className="err-msg"><code> Campo dirección es requerido</code></span>}
					</div>
					<div>
						<label>Edad</label>&nbsp;&nbsp;
						<input type="text" {...register('edad', {
							validate: Validators.edad
						})} />
						{errors.edad && <span className="err-msg"><code>La edad debe estar entre 18 y 65 años</code></span>}
					</div>
					<div>
						<label>País</label>&nbsp;&nbsp;
						<select {...register('pais')}>
							<option value="es">España</option>
							<option value="it">Italia</option>
							<option value="fr">Francia</option>
						</select>
					</div>
					<div>
					<div>
							<label htmlFor='tel-checkbox'>Incluir teléfono</label>&nbsp;&nbsp;
							<input type="checkbox" {...register('incluirTelefono')} id="tel-checkbox" />
					</div>
						{incluirTelFlag && (
							<div>
								<label>Teléfono</label>&nbsp;&nbsp;
								<input type="tel" {...register('telefono')} />
							</div>
						)}
						<input type="submit" value="Enviar" />
					</div>
				</form>
				<hr></hr>
				<div>
					{watchAllFields.nombre ? (
						<>
							<label>All Watched Fields:</label> Nombre: {watchAllFields.nombre}
						</>
					) : (
						''
					)}
				</div>
				<div>
					{watchFields && (
						<>
							<label>watchFields array:</label> {JSON.stringify(watchFields)}
						</>
					) }
				</div>
			</div>
		</div>
	)
}

export default FormularioComponent;
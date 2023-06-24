def parse_trafic_input_stream(traffic_input_stream): 
    parts = traffic_input_stream.split(';')
    semaphore_id = int(parts[0])
    from_letter, to_letter = parts[1].split('->')
    return from_letter, to_letter, semaphore_id
